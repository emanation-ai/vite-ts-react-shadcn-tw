import React from "react";

export interface ITabs {
  title: string;
  value: string;
  disabled: boolean;
}

export interface IDashboardTabs {
  title: string;
  tabs: ITabs[];
}

export interface IDashboardStats {
  title: string;
  formatted_value: string;
  label: string;
}

export interface ICardHeader {
  title: string;
  subtitle: string;
}

export interface IChartData {
  name: string;
  total: number;
}

export interface IRecentSales {
  name: string;
  email: string;
  amount: string;
  avatar_src: string;
  avatar_alt: string;
  avatar_fallback: string;
}

export interface IUserTeamData {
  label: string;
  value: string;
  avatar_src: string;
}

export interface IUserTeamHeader {
  label: string;
  teams: IUserTeamData[];
}

export interface IUserCreateTeam {
  title: string;
  description: string;
  input_label_name: string;
  input_placeholder_name: string;
  input_label_sub_plan: string;
  input_placeholder_sub_plan: string;
  subscription_plans: {
    title: string;
    pricing_description: string;
    value: string;
  }[];
}

export interface INavigation {
  href: string;
  label: string;
}

export interface IUser {
  img_src: string;
  img_alt: string;
  username: string;
  email: string;
}

export interface IUserMenu {
  name: string;
  shortcut: string | null;
}

export type IDashboardMainContext = {
  main: IDashboardTabs;
  setMain: React.Dispatch<React.SetStateAction<IDashboardTabs>>;
  stats: IDashboardStats[];
  setStats: React.Dispatch<React.SetStateAction<IDashboardStats[]>>;
};

export type IDashboardChartsContext = {
  chart_header: ICardHeader;
  setChartHeaders: React.Dispatch<React.SetStateAction<ICardHeader>>;
  chart_data: IChartData[];
  setChartData: React.Dispatch<React.SetStateAction<IChartData[]>>;
};

export type IDashboardRecentSalesContext = {
  sales_header: ICardHeader;
  setSalesHeader: React.Dispatch<React.SetStateAction<ICardHeader>>;
  recent_sales: IRecentSales[];
  setRecentSales: React.Dispatch<React.SetStateAction<IRecentSales[]>>;
};

export type IUserTeamContext = {
  groups: IUserTeamHeader[];
  setGroups: React.Dispatch<React.SetStateAction<IUserTeamHeader[]>>;
  create_team: IUserCreateTeam;
  setCreateTeam: React.Dispatch<React.SetStateAction<IUserCreateTeam>>;
};

export type INavigationContext = {
  links: INavigation[];
  setLinks: React.Dispatch<React.SetStateAction<INavigation[]>>;
};

export type IUserNavigationContext = {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  menus: IUserMenu[];
  setMenus: React.Dispatch<React.SetStateAction<IUserMenu[]>>;
  menus_other: IUserMenu[];
  setOtherMenus: React.Dispatch<React.SetStateAction<IUserMenu[]>>;
};
