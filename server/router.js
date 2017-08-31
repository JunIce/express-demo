var navConfig = [
	{	
		ico:'mode_edit',
		title:"信息", 
		children:[
			{
				c_title : '增加信息',
				c_url : '/server/info/add'
			},
			{
				c_title : '修改信息',
				c_url : '/server/info/edit'
			},
			{
				c_title : '信息',
				c_url : '/server/info/add'
			},
		]
	},{
		ico:'settings',
		title:"设置", 
		children:[
			''
		]
	},{
		ico:'subject',
		title:"关于", 
		children:[
			''
		]
	}
] 
// var add = require('./project/Info/addinfo.jade')

module.exports = {
	index : {
		data : JSON.stringify(navConfig)
	},
}