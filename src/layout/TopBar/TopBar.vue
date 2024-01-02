<template>
 <div class="bg-[#FFFFFF] drop-shadow-sm w-full fixed top-0 z-30">
  <div :id="!isShow ? 'topBar': ''"  class="container mx-auto" >
  <div class="topbar top-0 w-full z-10">
    <!-- <nav class="flex mx-auto flex-no-wrap fixed top-0  w-full items-center justify-between bg-[#FFFFFF] shadow-m -->
    <nav class="flex justify-between w-full ">
      <div>
        <a href="#">
          <img
            src="../../assets/logo/UTCC_Logo.png"
            class="main-logo"
            alt="UTCC Logo"
          />
        </a>
      </div>
      <div
        id="mega-menu-full"
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >

        <ul
          class="flex flex-col p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li v-for="(item, index) in menuItems" :key="index">
            <!-- <el-badge v-if="item.id == 4" :value="3" class="item">
            <a
              href="#"
              :class="`block ${item.id == idActive ? 'active' : ''}`"
              @click="handleSubMenuDropdown(item.items, item.id)"
              >{{ item.textName }}</a
            >
            </el-badge> -->
            <a
              href="#"
              :class="`block ${item.id == idActive ? 'active' : ''}`"
              @click="handleSubMenuDropdown(item.items, item.id)"
              >{{ item.textName }}</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <div id="bg-menu-top" v-if="isShow"  >
      <div class="container mx-auto">
        <div class="float-right cursor-pointer btn-close">
          <el-tooltip class="item text-[16px]" effect="light" content="Close Menu" placement="left">
            <font-awesome-icon @click="onClickCloseMenu()" :icon="['fas', 'circle-xmark']"   class="text-[20px]"/>
          </el-tooltip>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <div class="">
            <Caption></Caption>
          </div>
          <!-- Menu  -->
          <div  v-for="(item, index) in divMenu" :key="index">

            <MenuItem
              v-for="(subItem, index1) in item"
              :key="index1"
              :textName="subItem.textName"
              :textUrl="subItem.url"
            >
              {{ subItem }}
            </MenuItem>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import { ref,defineComponent } from "vue";
import Caption from "../../components/Caption.vue";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  name: "TopBar",
  components: {
    Caption,
    MenuItem,
  },
  props:{
    dataList:{ type: Array, required: false}
  },
  setup(props) {
    const menuItems = ref(props.dataList);
    const subMenu = ref([]);
    const idActive = ref(1);
    const isShow = ref(false);
    const divMenu = ref(null);

    // const setMenu = () => {
    //   menuItems.value = [
    //     {
    //       id: 1,
    //       textName: "Home",
    //       url: "home",
    //       isActive: true,
    //       items: [
    //         {
    //           textName: "เมนูที่ใช้งานบ่อย",
    //           url: "",
    //           subItems: [
    //             {
    //               textNameSub: "Microsoft 365",
    //               url: "",
    //             },
    //             {
    //               textNameSub: "เบอร์โทรภายใน",
    //               url: "",
    //             },
    //             {
    //               textNameSub: "Logo UTCC",
    //               url: "",
    //             },
    //           ],
    //         },
    //         {
    //           textName: "การประชุมมหาวิทยาลัย",
    //           url: "",
    //           subItems: [
    //             {
    //               textNameSub: "ปฎิทินการประชุม",
    //               url: "",
    //             },
    //             {
    //               textNameSub: "มติการประชุมมหาวิทยาลัย",
    //               url: "",
    //             },
    //           ],
    //         },
    //         {
    //           textName: "Latest File",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ข่าวสารประชาสัมพันธ์ภายนอก",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName:
    //             "พรบ. กฎ ประกาศ หลักเกณฑ์ และแนวปฏิบัติที่เกี่ยวข้องกับสถาบันอุดมศึกษาเอกชน",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "คู่มือการติดตั้ง",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "คู่มือการใช้งานระบบ Less Paper",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "กระบวนการจัดซื้อจัดจ้าง Work Flow",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "คู่มือการใช้งานและแนวปฏิบัติแผนกยานพาหนะ",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "เกี่ยวกับงานพัสดุ",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "เกี่ยวกับงานพัสดุ",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ระบบเอกสารดิจิตอล",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "การพัฒนาและดำเนินงาน KPI อาจารย์",
    //           url: "",
    //           subItems: [],
    //         },
    //       ],
    //     },
    //     {
    //       id: 2,
    //       textName: "Forms &Document",
    //       url: "formAndDocument",
    //       isActive: false,
    //       items: [
    //         {
    //           textName: "สำนักอำนวยการ",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "สำนักบริหารทรัพยากรมนุษย์",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "กองบัญชีและควบคุมงบประมาณ",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "กองพัสดุและจัดการทรัพย์สิน",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "กองนิติการ",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "สำนักบริการคอมพิวเตอร์",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "กองประชาสัมพันธ์",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "กองวิเทศสัมพันธ์",
    //           url: "",
    //           subItems: [],
    //         },
    //       ],
    //     },
    //     {
    //       id: 3,
    //       textName: "Department",
    //       url: "department",
    //       isActive: false,
    //       items: [
    //         {
    //           textName: "คณะวิชา",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ฝ่ายวิจัยและบริการธุรกิจ",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ฝ่ายบริหาร",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ฝ่ายวิชาการ",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ฝ่ายเทคโนโลยีสารสนเทศ",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ฝ่ายกิจการนักศึกษา",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ฝ่ายสื่อสารการตลาด",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ฝ่ายวิเทศสัมพันธ์",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ฝ่ายยุทธศาสตร์และกิจการพิเศษ",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ฝ่ายอาคารและสิ่งแวดล้อม",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "สำนักงานตรวจสอบภายใน",
    //           url: "",
    //           subItems: [],
    //         },
    //         {
    //           textName: "สถาบันพัฒนาบัณฑิตสู่ความสำเร็จ",
    //           url: "",
    //           subItems: [],
    //         },
    //       ],
    //     },
    //     {
    //       id: 4,
    //       textName: "Latest Update",
    //       url: "lastupdate",
    //       isActive: false,
    //       items: []
    //     },
    //     {
    //       id: 5,
    //       textName: "Online Service",
    //       url: "department",
    //       isActive: false,
    //       items: [
    //         {
    //           textName: "ระบบฐานข้อมูลประกันคุณภาพการศึกษา",
    //           url: "http://esar.utcc/",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ระบบสารสนเทศสืบค้นหนังสือเวียน",
    //           url: "http://center.utcc/index.php",
    //           subItems: [],
    //         },
    //         {
    //           textName: "แบบฟอร์มบันทึกและหนังสือต่างๆ",
    //           url: "http://department.utcc.ac.th/admin/index.php/2013-03-29-02-58-19",
    //           subItems: [],
    //         },
    //         {
    //           textName: "Less Paper",
    //           url: "https://lesspaper2.affix.co.th/utcc/app/desktop",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ระบบบันทึกใบลา",
    //           url: "http://hr.utcc/webtime/default1.aspx",
    //           subItems: [],
    //         },
    //         {
    //           textName: "Slip Online",
    //           url: "http://hr.utcc/webslip/WebLogin.aspx",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ใบขอซื้อออนไลน์",
    //           url: "http://pronweb.utcc/Account/Login?ReturnUrl=%2f",
    //           subItems: [],
    //         },
    //         {
    //           textName: "Functional Area",
    //           url: "functional.html",
    //           subItems: [],
    //         },
    //         {
    //           textName: "การจัดทำงบประมาณ",
    //           url: "budget.html",
    //           subItems: [],
    //         },
    //         {
    //           textName: "KPI online",
    //           url: "https://kpi.utcc.ac.th/",
    //           subItems: [],
    //         },
    //         {
    //           textName: "Strategics online",
    //           url: "http://plan.utcc/",
    //           subItems: [],
    //         },
    //         {
    //           textName: "งานบริหารความเสี่ยง",
    //           url: "risk.html",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ระบบติดตามเอกสาร",
    //           url: "http://dts.utcc/index.php",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ระบบตรวจเช็คพัสดุ",
    //           url: "http://utcc2.utcc.ac.th/posts/display.php",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ค้นหาเบอร์โทรศัพท์ภายใน",
    //           url: "http://utcc2.utcc.ac.th/utccphone/",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ขอใช้พื้นที่ IDE Center",
    //           url: "http://utcc2.utcc.ac.th/idecenter/index2.php",
    //           subItems: [],
    //         },
    //         {
    //           textName: "บันทึกข้อมูลสัญญา (กองจัดการธุรกิจ)",
    //           url: "http://demodep.utcc.ac.th/rental/index.php",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ระบบข้อมูลคุมเงินหลักประกันสัญญา",
    //           url: "http://agreement.utcc/",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ระบบตรวจสอบข้อมูลทรัพย์สิน",
    //           url: "http://asset.utcc/",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ระบบกองอาคารและสิ่งแวดล้อม",
    //           url: "http://opf.utcc.ac.th/",
    //           subItems: [],
    //         },
    //         {
    //           textName: "ระบบจองห้องโถงจัดเลี้ยง (อาคาร 10 ชั้น 3)",
    //           url: "http://ascroom.utcc.ac.th/new",
    //           subItems: [],
    //         },
    //       ],
    //     },
    //   ];
    // };
    // setMenu();

    const handleSubMenuDropdown = async (items, id) => {
      idActive.value = id;
      if (id == 1 ) {
        isShow.value = false
        return;
      }
      items.sort((a, b) => a.textName.localeCompare(b.textName, "th"));
      //  if(items.length > 8){
      let data = await dividedArray(items);
      // console.log("data ....... ", data);
      divMenu.value = data;
      //  }else{
      //   divMenu.value = items
      //  }
      isShow.value = true;
      console.log("divMenu ... run ", divMenu.value);
    };
    const dividedArray = (items) => {
      const setSize = 8;
      const dividedArray = [];
      for (let i = 0; i < items.length; i += setSize) {
        dividedArray.push(items.slice(i, i + setSize));
      }
      return dividedArray;
    };

    const onClickAway =(e)=>{
      console.log(' test .. ', e);
    }

    const onClickCloseMenu =()=>{
      isShow.value = false
      idActive.value = 1
    }

    return {
      menuItems,
      subMenu,
      handleSubMenuDropdown,
      idActive,
      isShow,
      divMenu,
      onClickAway,
      onClickCloseMenu
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.main-logo{
    width: 230px;
    height: 70px;
  }
// #topBar {
//   box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
//   rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

// }
#mega-menu-full {
  li {
    a {
      font-size: 20px;
      color: $a-blue-2E3191;
      padding: 0 2rem;
      border-radius: 25px;
      background-color: $a-gray-F9FAFB;

      &:hover {
        color: $a-blue-005BC0;
        background-color: rgb(241,243,244);
      }

      &.active {
        background-color: $a-blue-2E3191;
        border-radius: 25px;
        color: #fff;
        padding: 0 2rem;
        text-decoration: none;
      }
    }
  }
}
#bg-menu-top {
  background-color: $a-blue-F9FAFC;
  // border-radius: 1rem;
  border-left: 5px solid $a-blue-2E3191;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  z-index: 3;
  position: absolute;
  padding: 2rem 0;
  top: 70px;
  min-width: 100%;
  left: 0;

}
.menu-focus {
  width: 48px;
  height: 48px;
  background-color: #dcedff;
}
.btn-close{
  color: #787878;
  &:hover {
    color: #005BC0;
  }
}
</style>
