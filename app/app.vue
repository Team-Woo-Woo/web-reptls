<template>
  <ILayout>
    <ILayoutHeader>
      <INavbar class="_position:fixed-top _width:100vw navbar-header">
        <INavbarBrand to="/" class="_padding:0">
          <div class="img-container">
            <NuxtImg :modifiers="{ trim: 10, extract: '0_0_560_660' }" src="/images/figures/neutral.png" width="60" class="_max-width:50vw" />
          </div>
        </INavbarBrand>
        <INavbarCollapsible>
          <INav>
            <INavItem to="/"> Home </INavItem>
            <INavItem to="/reports"> Reports </INavItem>
            <INavItem to="/groups"> Groups </INavItem>
            <INavItem to="/library"> Library </INavItem>
          </INav>
        </INavbarCollapsible>
      </INavbar>
    </ILayoutHeader>
    <NuxtPage class="nuxt-page" />
  </ILayout>
</template>

<style lang="scss">
.navbar-brand {
  padding: 0 !important;
  width: 60px;
  //height: 0;
  div {
    z-index: 100;
    top: 0;
    height: 100%;
    position: absolute;
    overflow: hidden;
    @media screen and (max-width: 1024px) {
      height: 52px;
      img {
        width: 100%;
        margin-top: 0;
      }
    }
  }
  img {
    width: 110%;
    margin-top: 5px;
    //margin-left: -70px;
  }
}
.nuxt-page {
  margin-top: 110px; // 88
  @media screen and (max-width: 600px) {
    margin-top: 88px;
  }
}
.blockquote audio {
  max-width: 100%;
}
</style>