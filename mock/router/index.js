import { baseAddress } from "@/api/url";
import Mock from "mockjs";
import { baseData } from "../base.ts";

export const adminRoutes = [
  {
    menuUrl: "/system",
    menuName: "系统管理",
    icon: "SettingIcon",
    tip: "new",
    parentPath: '',
    children: [
      {
        parentPath: '/system',
        menuUrl: "/system/department",
        menuName: "部门管理",
      },
      {
        parentPath: '/system',
        menuUrl: "/system/user",
        menuName: "用户管理",
      },
      {
        parentPath: '/system',
        menuUrl: "/system/role",
        menuName: "角色管理",
      },
      {
        parentPath: '/system',
        menuUrl: "/system/menu",
        menuName: "菜单管理",
        cacheable: true
      },
    ],
  },
  {
    menuUrl: "/list",
    menuName: "列表页面",
    icon: "OperationIcon",
    parentPath: '',
    children: [
      {
        parentPath: '/list',
        menuUrl: "/list/table-with-search",
        menuName: "表格搜索",
      },
      {
        parentPath: '/list',
        menuUrl: "/list/table-custom",
        menuName: "自定义表格",
      },
      {
        parentPath: '/list',
        menuUrl: "/list/list",
        menuName: "普通列表",
      },
      {
        parentPath: '/list',
        menuUrl: "/list/card-list",
        menuName: "卡片列表",
      },
    ],
  },
  {
    menuUrl: "/form",
    menuName: "表单页面",
    tip: "dot",
    icon: "PostcardIcon",
    parentPath: '',
    children: [
      {
        parentPath: '/form',
        menuUrl: "/form/base-form-view",
        menuName: "基本表单",
        cacheable: true,
      },
      {
        parentPath: '/form',
        menuUrl: "/form/advance-form",
        menuName: "高级表单",
        cacheable: true,
      },
      {
        parentPath: '/form',
        menuUrl: "/form/step-form",
        menuName: "分步表单",
      },
      {
        parentPath: '/form',
        menuUrl: "/form/form-component",
        menuName: "表单组件",
      },
    ],
  }
];
export const editorRoutes = [
  {
    menuUrl: "/list",
    menuName: "列表页面",
    icon: "OperationIcon",
    parentPath: '',
    children: [
      {
        parentPath: '/list',
        menuUrl: "/list/card-list",
        menuName: "卡片列表",
      },
    ],
  }
];

Mock.mock(baseAddress + "/getMenuList", function () {
  baseData.data = adminRoutes;
  return Mock.mock(baseData);
});
