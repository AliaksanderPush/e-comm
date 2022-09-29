export const usersAuth = state => state.UserReducer.user;
export const userTokens = state => state.UserReducer.tokens;
export const userError = state => state.AppReducer.error;
export const loader = state => state.AppReducer.loading;
export const getInventories = state => state.InventoryReducer.inventories;
export const viewAllPages = state => state.InventoryReducer.totalInventories;
export const getAllVideo = state => state.VideoReducer.video;
export const getVideoById = state => state.VideoReducer.singleVideo;
export const getVideoCount = state => state.VideoReducer.totalVideo;
export const getAllNews = state => state.NewsReducer.news;
export const getNewsById = state => state.NewsReducer.singleNews;
export const getTokenForResCode = state => state.UserReducer.tokenForResetCode;
export const getTokenForChangePassword = state =>
  state.UserReducer.tokenForRestorePass;
export const userEmail = state => state.UserReducer.userEmail;
export const getMyInventory = state => state.InventoryReducer.myInventories;
export const getFilterMyInventories = state =>
  state.InventoryReducer.filterMyInventories;
export const getRunningLow = state => state.InventoryReducer.runningLow;
export const getCurrentPage = state => state.InventoryReducer.currPage;
export const getAddInventories = state =>
  state.InventoryReducer.orderInventories;
export const getHistoryStatistics = state => state.StatisticReducer.historyStat;
export const getCommonStatistics = state => state.StatisticReducer.commonStat;
export const getOrderRunnLow = state => state.InventoryReducer.orderRunnLow;
export const getSellingInv = state => state.SellingReducer.sellingInv;
