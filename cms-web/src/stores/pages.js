import { defineStore } from "pinia";

export const usePagesStore = defineStore("page", {
  state: () => ({
    pagesList: [
      {
        title: "Trang chủ",
        icon: "home",
        direct: "/home",
        active: false,
      },
      {
        title: "Bài viết",
        icon: "article",
        direct: "/article",
        active: false,
      },
      {
        title: "Sự kiện",
        icon: "bookmark",
        direct: "/event",
        active: false,
      },
      {
        title: "Lich ngày",
        icon: "calendar_today",
        direct: "/day_event",
        active: false,
      },
      {
        title: "Lịch tháng",
        icon: "calendar_month",
        direct: "/month_calendar",
        active: false,
      },
      {
        title: "Sự kiện tết",
        icon: "public",
        direct: "/tet_holiday_event",
        active: false,
      },
      {
        title: "Thành viên",
        icon: "groups",
        direct: "/membership",
        active: false,
      },
      {
        title: "Cài đặt",
        icon: "settings",
        direct: "/setting",
        active: false,
      },
    ],
  }),

  getters: {},

  actions: {},
});
