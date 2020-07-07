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
				Code: "login",
				Title: "Login",
				Icon: "el-icon-menu",
				Path: "/pages/login"
			},
			{
				Code: "register",
				Title: "Register",
				Icon: "el-icon-menu",
				Path: "/pages/register"
			},
			{
				Code: "forgotpassword",
				Title: "Forgot Password",
				Icon: "el-icon-menu",
				Path: "/pages/forgotpassword"
			},
			{
				Code: "maps",
				Title: "Maps",
				Icon: "el-icon-menu",
				child: [
					{
						Code: "googlemap",
						Title: "Googlemap",
						Icon: "el-icon-menu",
						Path: "/map/googlemap"
					},
					{
						Code: "kakaomap",
						Title: "Kakaomap",
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
				Code: "tooltip",
				Title: "Tooltip & Popover",
				Icon: "el-icon-menu",
				Path: "/ui/tooltip"
			},
			{
				Code: "dialog",
				Title: "Dialog",
				Icon: "el-icon-menu",
				Path: "/ui/dialog"
			},
			{
				Code: "tab",
				Title: "Tabs",
				Icon: "el-icon-menu",
				Path: "/ui/tab"
			},
			{
				Code: "images",
				Title: "Images",
				Icon: "el-icon-menu",
				Path: "/ui/images"
			},
			{
				Code: "colors",
				Title: "Colors Picker",
				Icon: "el-icon-menu",
				Path: "/ui/colors"
			},
			{
				Code: "progressbars",
				Title: "Progress Bars",
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
				Title: "Animation",
				Icon: "el-icon-menu",
				Path: "/ui/animation"
			},
			{
				Code: "scrollable",
				Title: "Scrollable",
				Icon: "el-icon-menu",
				Path: "/ui/scrollable"
			},
			{
				Code: "rating",
				Title: "Rating",
				Icon: "el-icon-menu",
				Path: "/ui/rating"
			},
			{
				Code: "alert",
				Title: "Alert",
				Icon: "el-icon-menu",
				Path: "/ui/alert"
			},
			{
				Code: "treeview",
				Title: "Treeview",
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
				Code: "General Element",
				Title: "general element",
				Icon: "el-icon-menu",
				Path: "/form/generalfrm"
			},
			{
				Code: "Material",
				Title: "Material element",
				Icon: "el-icon-menu",
				Path: "/form/materialfrm"
			},
			{
				Code: "formWizard",
				Title: "Form Wizard",
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
				Title: "Editors",
				Icon: "el-icon-menu",
				child: [
					{
						Code: "markdown",
						Title: "Markdown",
						Icon: "el-icon-menu",
						Path: "/editors/markdown"
					},
					{
						Code: "codeeditor",
						Title: "Code Editor",
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
				Title: "Calendar",
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
				Title: "Forum",
				Icon: "el-icon-menu",
				Path: "/apps/forum"
			}
		]
	}
]