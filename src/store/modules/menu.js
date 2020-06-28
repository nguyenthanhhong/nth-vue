export default [
	{
		Code: "dashboard",
		Title: "Dashboard",
		Icon: "el-icon-s-home",
		Path: "/index"
	},
	{
		Code: "layouts",
		Title: "Layouts",
		Icon: "el-icon-c-scale-to-original",
		Path: "/layout"
	},
	{
		Code: "pages",
		Title: "Pages",
		Icon: "el-icon-s-flag",
		child: [
			{
				Code: "errors",
				Title: "Errors",
				Icon: "el-icon-menu",
				child: [
					{
						Code: "page400",
						Title: "400",
						Path: "/pages/400",
					},
					{
						Code: "page403",
						Title: "403",
						Path: "/pages/403",
					},
					{
						Code: "page404",
						Title: "404",
						Path: "/pages/404",
					},
					{
						Code: "page500",
						Title: "500",
						Path: "/pages/500",
					},
					{
						Code: "page503",
						Title: "503",
						Path: "/pages/503",
					}
				]
			},
			{
				Code: "gallery",
				Title: "gallery",
				Icon: "el-icon-menu",
				Path: "/pages/gallery"
			},
			{
				Code: "login",
				Title: "login",
				Icon: "el-icon-menu",
				Path: "/pages/login"
			},
			{
				Code: "register",
				Title: "register",
				Icon: "el-icon-menu",
				Path: "/pages/register"
			},
			{
				Code: "profile",
				Title: "profile",
				Icon: "el-icon-menu",
				Path: "/pages/profile"
			},
			{
				Code: "forgotpassword",
				Title: "forgotpassword",
				Icon: "el-icon-menu",
				Path: "/pages/forgotpassword"
			},
			{
				Code: "maps",
				Title: "maps",
				Icon: "el-icon-menu",
				child: [
					{
						Code: "googlemap",
						Title: "googlemap",
						Icon: "el-icon-menu",
						Path: "/map/googlemap"
					},
					{
						Code: "kakaomap",
						Title: "kakaomap",
						Icon: "el-icon-menu",
						Path: "/map/kakaomap"
					}
				]
			}
		]
	},
	{
		Code: "basicui",
		Title: "Basic UI",
		Icon: "el-icon-s-order",
		child: [
			{
				Code: "panel",
				Title: "Panel",
				Icon: "el-icon-menu",
				Path: "/ui/panel"
			},
			{
				Code: "buttons",
				Title: "Buttons",
				Icon: "el-icon-menu",
				Path: "/ui/buttons"
			},
			{
				Code: "dropdowns",
				Title: "Dropdowns",
				Icon: "el-icon-menu",
				Path: "/ui/dropdowns"
			},
			{
				Code: "icons",
				Title: "Icons",
				Icon: "el-icon-menu",
				Path: "/ui/icons"
			},
			{
				Code: "list",
				Title: "List",
				Icon: "el-icon-menu",
				Path: "/ui/list"
			},
			{
				Code: "tooltip",
				Title: "tooltip & popover",
				Icon: "el-icon-menu",
				Path: "/ui/tooltip"
			},
			{
				Code: "dialog",
				Title: "dialog",
				Icon: "el-icon-menu",
				Path: "/ui/dialog"
			},
			{
				Code: "tab",
				Title: "tab",
				Icon: "el-icon-menu",
				Path: "/ui/tab"
			},
			{
				Code: "images",
				Title: "images",
				Icon: "el-icon-menu",
				Path: "/ui/images"
			},
			{
				Code: "colors",
				Title: "colors",
				Icon: "el-icon-menu",
				Path: "/ui/colors"
			},
			{
				Code: "progressbars",
				Title: "progressbars",
				Icon: "el-icon-menu",
				Path: "/ui/progressbars"
			},
			{
				Code: "carousel",
				Title: "carousel",
				Icon: "el-icon-menu",
				Path: "/ui/carousel"
			}
		]
	},
	{
		Code: "advui",
		Title: "Advanced UI",
		Icon: "el-icon-s-ticket",
		child: [
			{
				Code: "animation",
				Title: "animation",
				Icon: "el-icon-menu",
				Path: "/ui/animation"
			},
			{
				Code: "scrollable",
				Title: "scrollable",
				Icon: "el-icon-menu",
				Path: "/ui/scrollable"
			},
			{
				Code: "rating",
				Title: "rating",
				Icon: "el-icon-menu",
				Path: "/ui/rating"
			},
			{
				Code: "alert",
				Title: "alert",
				Icon: "el-icon-menu",
				Path: "/ui/alert"
			},
			{
				Code: "treeview",
				Title: "treeview",
				Icon: "el-icon-menu",
				Path: "/ui/treeview"
			}
		]
	},
	{
		Code: "form",
		Title: "Forms",
		Icon: "el-icon-s-operation",
		child: [
			{
				Code: "general element",
				Title: "general element",
				Icon: "el-icon-menu",
				Path: "/form/generalfrm"
			},
			{
				Code: "material",
				Title: "material element",
				Icon: "el-icon-menu",
				Path: "/form/materialfrm"
			},
			{
				Code: "formWizard",
				Title: "formWizard",
				Icon: "el-icon-menu",
				Path: "/form/wizardfrm"
			},
			{
				Code: "formValidation",
				Title: "Form Validation",
				Icon: "el-icon-menu",
				Path: "/form/validfrm"
			},
			{
				Code: "File Uploads",
				Title: "File Uploads",
				Icon: "el-icon-menu",
				Path: "/form/uploadfrm"
			},
			{
				Code: "editors",
				Title: "editors",
				Icon: "el-icon-menu",
				child: [
					{
						Code: "markdown",
						Title: "markdown",
						Icon: "el-icon-menu",
						Path: "/editors/markdown"
					},
					{
						Code: "codeeditor",
						Title: "code editor",
						Icon: "el-icon-menu",
						Path: "/editors/codeeditor"
					}
				]
			}
		]
	},
	{
		Code: "tables",
		Title: "Tables",
		Icon: "el-icon-s-grid",
		child: [
			{
				Code: "basictables",
				Title: "Basic Tables",
				Icon: "el-icon-menu",
				Path: "/table/basictables"
			},
			{
				Code: "edittables",
				Title: "Edit Tables",
				Icon: "el-icon-menu",
				Path: "/table/edittables"
			},
			{
				Code: "treetable",
				Title: "Tree Tables",
				Icon: "el-icon-menu",
				Path: "/table/treetable"
			}
		]
	},
	{
		Code: "chart",
		Title: "Charts",
		Icon: "el-icon-s-data",
		child: [
			{
				Code: "barchart",
				Title: "Bar Chart",
				Icon: "el-icon-menu",
				Path: "/chart/barchart"
			},
			{
				Code: "linechart",
				Title: "Line Chart",
				Icon: "el-icon-menu",
				Path: "/chart/linechart"
			},
			{
				Code: "piechart",
				Title: "Pie Chart",
				Icon: "el-icon-menu",
				Path: "/chart/piechart"
			}
		]
	},
	{
		Code: "apps",
		Title: "Apps",
		Icon: "el-icon-menu",
		child: [
			{
				Code: "calendar",
				Title: "calendar",
				Icon: "el-icon-menu",
				Path: "/apps/calendar"
			},
			{
				Code: "mailbox",
				Title: "Mail Box",
				Icon: "el-icon-menu",
				Path: "/apps/mailbox"
			},
			{
				Code: "media",
				Title: "Media",
				Icon: "el-icon-menu",
				Path: "/apps/media"
			},
			{
				Code: "forum",
				Title: "forum",
				Icon: "el-icon-menu",
				Path: "/apps/forum"
			}
		]
	}
]