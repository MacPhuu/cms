const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", component: () => import("pages/IndexPage.vue") },
      { path: "article", component: () => import("pages/Article.vue") },
      { path: "day_event", component: () => import("pages/DayEvent.vue") },
      { path: "event", component: () => import("pages/Event.vue") },
      {
        path: "month_calendar",
        component: () => import("pages/MonthCalendar.vue"),
      },
      { path: "setting", component: () => import("pages/Setting.vue") },
      {
        path: "tet_holiday_event",
        component: () => import("pages/TetHolidayEvent.vue"),
      },
      { path: "membership", component: () => import("pages/Membership.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue"),
  },
  // {
  //   path: "/article",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Article.vue") }],
  // },
  // {
  //   path: "/day_event",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/DayEvent.vue") }],
  // },
  // {
  //   path: "/event",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Event.vue") }],
  // },
  // {
  //   path: "/month_calendar",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/MonthCalendar.vue") },
  //   ],
  // },
  // {
  //   path: "/setting",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Setting.vue") }],
  // },
  // {
  //   path: "/tet_holiday_event",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/TetHolidayEvent.vue") },
  //   ],
  // },
  // {
  //   path: "/membership",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Membership.vue") }],
  // },
];

export default routes;
