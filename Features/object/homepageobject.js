class homepageobject {
    constructor() {
            this.homeMenuButton = "com.teknasyon.coloringbook:id/home",
             this.homeFirstPicture = "//android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.ImageView",
            this.scrollElement1 = "//android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[6]/android.view.ViewGroup/android.widget.ImageView",
            this.headerText1 = "//*[@text=\"Rahatlayın\"]",
            this.detailText1 = "//*[@text=\"Birbirinden harika resim koleksiyonumuzdan dilediğinizi seçin ve boyayarak rahatlayın.\"]",
            this.headerText2 = "//*[@text=\"Yaratıcı Olun\"]",
            this.detailText2 = "//*[@text=\"Yaratıcılığınızı konuşturun! Tasarlayacağınız resimleri arkadaşlarınızla paylaşın ve beğeni toplayın.\"]",
            this.headerText3 = "//*[@text=\"Muhteşem Paletler\"]",
            this.detailText3 = "//*[@text=\"Birbirinden harika renk paletlerini keşfedin. Artık hazırsınız.\"]",
            this.homeSliderImage = "com.teknasyon.coloringbook:id/sliderImage",
            this.skipButton = "com.teknasyon.coloringbook:id/skipButton",
            this.skipButtonXpath = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Button",
            this.othersLanguageMenuControl = "com.teknasyon.coloringbook:id/appLanguage",
            this.othersToolbarControl = "com.teknasyon.coloringbook:id/toolbarTitle",
            this.othersMenuButton = "com.teknasyon.coloringbook:id/others",
            this.cateGoryMenuButton = "com.teknasyon.coloringbook:id/categories",
            this.cateGoryToolbarControl = "com.teknasyon.coloringbook:id/toolbarTitle",
            this.myWorkMenuButton = "com.teknasyon.coloringbook:id/myWork",
            this.myWorkMenuToolbarControl = "com.teknasyon.coloringbook:id/toolbarTitle",
            this.reklamContent = "\t\n" +
                "android:id/content",
             this.reklamCarpı = "\t\n" +
                    "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.widget.ImageView",
            this.startView = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.ImageView"


    }
}

module.exports = homepageobject;
