<template>
  <ILayout>
    <ILayoutHeader>
      <INavbar class="_position:fixed-top _width:100vw navbar-header">
        <INavbarBrand to="/" class="_padding:0">
          <div class="img-container">
            <NuxtImg :modifiers="{ trim: 10, extract: '0_0_560_630' }" src="/images/figures/pointing-front.png" height="65" class="_max-width:50vw" />
            <div class="text _font-size:xl _text:uppercase">Reptilian<br>Report</div>
            <div>&nbsp;</div>
          </div>
        </INavbarBrand>
        <INavbarCollapsible>
          <INav>
            <INavItem to="/"> Home </INavItem>
<!--            <INavItem to="/reports"> Reports </INavItem>-->
            <INavItem to="/groups"> Groups </INavItem>
<!--            <INavItem to="/library"> Library </INavItem>-->
          </INav>
        </INavbarCollapsible>
      </INavbar>
    </ILayoutHeader>
    <NuxtPage class="nuxt-page _background-color:dark-shade-50" />
  </ILayout>
</template>

<style lang="scss">
.navbar-header {
  z-index: 200;
}
.navbar-brand {
  padding: 0 !important;
  width: 165px;
  div.img-container {
    display: flex;
    z-index: 100;
    top: 0;
    height: 100%;
    align-items: center;
    .text {
      position: absolute;
      margin-left: 70px;
      line-height: 1.5rem;
      color: lawngreen;
    }
  }
  img {
    position: absolute;
    @media screen and (max-width: 1024px) {
      margin-top: -12px;
    }
  }
}
.nuxt-page {
  margin-top: 74px; // 88
  @media screen and (max-width: 600px) {
    margin-top: 58px;
  }
}
.blockquote audio {
  max-width: 100%;
}
</style>