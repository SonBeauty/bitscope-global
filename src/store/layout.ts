import { createSlice } from "@reduxjs/toolkit";
import themeConfig from "@/configs/themeConfig";
const initialDarkMode = () => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem("darkMode");
    return item ? JSON.parse(item) : themeConfig.layout.darkMode;
  }
};
const initialSidebarCollapsed = () => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem("sidebarCollapsed");
    return item ? JSON.parse(item) : themeConfig.layout.menu.isCollapsed;
  }
};
const initialSemiDarkMode = () => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem("semiDarkMode");
    return item ? JSON.parse(item) : themeConfig.layout.semiDarkMode;
  }
};
const initialSkin = () => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem("skin");
    return item ? JSON.parse(item) : themeConfig.layout.skin;
  }
};
const initialType = () => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem("type");
    return item ? JSON.parse(item) : themeConfig.layout.type;
  }
};
const initialMonochrome = () => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem("monochrome");
    return item ? JSON.parse(item) : themeConfig.layout.isMonochrome;
  }
};
const initialState = {
  darkMode: initialDarkMode(),
  isCollapsed: initialSidebarCollapsed(),
  customizer: themeConfig.layout.customizer,
  semiDarkMode: initialSemiDarkMode(),
  skin: initialSkin(),
  contentWidth: themeConfig.layout.contentWidth,
  type: initialType(),
  menuHidden: themeConfig.layout.menu.isHidden,
  navBarType: themeConfig.layout.navBarType,
  footerType: themeConfig.layout.footerType,
  mobileMenu: themeConfig.layout.mobileMenu,
  isMonochrome: initialMonochrome(),
};
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    handleDarkMode: (state, action) => {
      state.darkMode = action.payload;
      window.localStorage.setItem("darkMode", action.payload);
    },
    handleSidebarCollapsed: (state, action) => {
      state.isCollapsed = action.payload;
      window.localStorage.setItem("sidebarCollapsed", action.payload);
    },
    handleCustomizer: (state, action) => {
      state.customizer = action.payload;
    },
    handleSemiDarkMode: (state, action) => {
      state.semiDarkMode = action.payload;
      window.localStorage.setItem("semiDarkMode", action.payload);
    },
    handleSkin: (state, action) => {
      state.skin = action.payload;
      window.localStorage.setItem("skin", JSON.stringify(action.payload));
    },
    handleContentWidth: (state, action) => {
      state.contentWidth = action.payload;
    },
    handleType: (state, action) => {
      state.type = action.payload;
      window.localStorage.setItem("type", JSON.stringify(action.payload));
    },
    handleMenuHidden: (state, action) => {
      state.menuHidden = action.payload;
    },
    handleNavBarType: (state, action) => {
      state.navBarType = action.payload;
    },
    handleFooterType: (state, action) => {
      state.footerType = action.payload;
    },
    handleMobileMenu: (state, action) => {
      state.mobileMenu = action.payload;
    },
    handleMonoChrome: (state, action) => {
      state.isMonochrome = action.payload;
      window.localStorage.setItem("monochrome", JSON.stringify(action.payload));
    },
  },
});
export const {
  handleDarkMode,
  handleSidebarCollapsed,
  handleCustomizer,
  handleSemiDarkMode,
  handleSkin,
  handleContentWidth,
  handleType,
  handleMenuHidden,
  handleNavBarType,
  handleFooterType,
  handleMobileMenu,
  handleMonoChrome,
} = layoutSlice.actions;
export default layoutSlice.reducer;