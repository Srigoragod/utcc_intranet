<template>
<div class="adminActions">
	<input type="checkbox" name="adminToggle" class="adminToggle" />
	<a class="adminButton" href="#!"><i class="fa fa-cog"></i></a>
	<div class="adminButtons">
		<a href="#" title="Add Company"><i class="fa fa-building"></i></a>
		<a href="#" title="Edit Company"><i class="fa fa-pen"></i></a>
		<a href="#" title="Add User"><i class="fa fa-user-plus"></i></a>
		<a href="#" title="Edit User"><i class="fa fa-user-edit"></i></a>
	</div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
body {
  background-color: #f5f5f5;
}

.adminActions {
  position: fixed;
  bottom: 35px;
  right: 35px;

  .adminButton {
    height: 60px;
    width: 60px;
    background-color: rgba(67, 83, 143, 0.8);
    border-radius: 50%;
    display: block;
    color: #fff;
    text-align: center;
    position: relative;
    z-index: 1;

    i {
      font-size: 22px;
    }
  }

  .adminButtons {
    position: absolute;
    width: 100%;
    bottom: 120%;
    text-align: center;

    a {
      display: block;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      text-decoration: none;
      margin: 10px auto 0;
      line-height: 1.15;
      color: #fff;
      opacity: 0;
      visibility: hidden;
      position: relative;
      box-shadow: 0 0 5px 1px rgba(51, 51, 51, 0.3);

      &:hover {
        transform: scale(1.05);
      }

      &:nth-child(1) {
        background-color: #ff5722;
        transition: opacity 0.2s ease-in-out 0.3s, transform 0.15s ease-in-out;
      }

      &:nth-child(2) {
        background-color: #03a9f4;
        transition: opacity 0.2s ease-in-out 0.25s, transform 0.15s ease-in-out;
      }

      &:nth-child(3) {
        background-color: #f44336;
        transition: opacity 0.2s ease-in-out 0.2s, transform 0.15s ease-in-out;
      }

      &:nth-child(4) {
        background-color: #4CAF50;
        transition: opacity 0.2s ease-in-out 0.15s, transform 0.15s ease-in-out;
      }

      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .adminToggle {
    -webkit-appearance: none;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    z-index: 2;
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 0 3px 5px 1px rgba(51, 51, 51, 0.3);

    &:hover {
      box-shadow: 0 3px 6px 2px rgba(51, 51, 51, 0.3);
    }

    &:checked ~ .adminButtons a {
      opacity: 1;
      visibility: visible;
    }
  }
}

</style>
