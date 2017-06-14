<template>
  <div class="page-index">

    <div class="container">
		  <div v-show="activeTab === 'tab1'">
		    <div class="testVH contentHeightStatic">

		    	<scroller
					  :on-refresh="onRefresh1"
					  :on-infinite="onInfinite1">
					  <!-- content goes here -->
					  <div class="panel-container" v-for="(testItem,index) in testList1">
	      			<div class="panel-wrapper">
	      				<router-link to="/">
	      					<div class="panel-title">
			      				<div class="panel-title-left">
			      					<!--科目三考试：请假一天-->
			      					<span>{{testItem.title}}</span>
			      					<i class="icon-lock" v-if="index == 0"></i>
			      				</div>
			      			</div>
			      			<div class="panel-footer clearfix">
			      				<div class="panel-footer-left">
			      					<i class="icon-user"></i>
			      					<!--发起人：李依依-->
			      					<span>{{testItem.creator}}</span>
			      				</div>
			      				<div class="panel-footer-right">
			      					<!--2016-12-22 19:30-->
			      					{{testItem.createTime}}
			      				</div>
			      			</div>
	      				</router-link>

	      			</div>
	      	</div>
					</scroller>
      	</div>
		  </div>
		  <div v-show="activeTab === 'tab2'">
		    <div class="testVH contentHeightStatic">
      	<scroller
					  :on-refresh="onRefresh2"
					  :on-infinite="onInfinite2">
					  <!-- content goes here -->
					  <div class="panel-container" v-for="(testItem,index) in testList2">
	      			<div class="panel-wrapper">

		      			<router-link to="/">
	      					<div class="panel-title">
			      				<div class="panel-title-left">
			      					<!--科目三考试：请假一天-->
			      					<span>{{testItem.title}}</span>
			      					<i class="icon-lock" v-if="index == 0"></i>
			      				</div>
			      			</div>
			      			<div class="panel-footer clearfix">
			      				<div class="panel-footer-left">
			      					<i class="icon-user"></i>
			      					<!--发起人：李依依-->
			      					<span>{{testItem.creator}}</span>
			      				</div>
			      				<div class="panel-footer-right">
			      					<!--2016-12-22 19:30-->
			      					{{testItem.createTime}}
			      				</div>
			      			</div>
	      				</router-link>
	      			</div>
	      	</div>
					</scroller>
      </div>
		  </div>
		  <div v-show="activeTab === 'tab3'">
		    <div class="testVH contentHeightStatic">
		    	<scroller
					  :on-refresh="onRefresh3"
					  :on-infinite="onInfinite3">
					  <!-- content goes here -->
					  <div class="panel-container" v-for="(testItem,index) in testList3">
	      			<div class="panel-wrapper">

		      			<router-link to="/">
	      					<div class="panel-title">
			      				<div class="panel-title-left">
			      					<!--科目三考试：请假一天-->
			      					<span>{{testItem.title}}</span>
			      					<i class="icon-lock" v-if="index == 0"></i>
			      				</div>
			      			</div>
			      			<div class="panel-footer clearfix">
			      				<div class="panel-footer-left">
			      					<i class="icon-user"></i>
			      					<!--发起人：李依依-->
			      					<span>{{testItem.creator}}</span>
			      				</div>
			      				<div class="panel-footer-right">
			      					<!--2016-12-22 19:30-->
			      					{{testItem.createTime}}
			      				</div>
			      			</div>
	      				</router-link>
	      			</div>
	      	</div>
					</scroller>
      </div>
		  </div>

		  <div v-show="activeTab === 'tab4'">
		    <div class="testVH contentHeightStatic">
      	<scroller
					  :on-refresh="onRefresh4"
					  :on-infinite="onInfinite4">
					  <!-- content goes here -->
					  <div class="panel-container" v-for="(testItem,index) in testList4">
	      			<div class="panel-wrapper">

		      			<router-link to="/">
	      					<div class="panel-title">
			      				<div class="panel-title-left">
			      					<!--科目三考试：请假一天-->
			      					<span>{{testItem.title}}</span>
			      					<i class="icon-lock" v-if="index == 0"></i>
			      				</div>
			      			</div>
			      			<div class="panel-footer clearfix">
			      				<div class="panel-footer-left">
			      					<i class="icon-user"></i>
			      					<!--发起人：李依依-->
			      					<span>{{testItem.creator}}</span>
			      				</div>
			      				<div class="panel-footer-right">
			      					<!--2016-12-22 19:30-->
			      					{{testItem.createTime}}
			      				</div>
			      			</div>
	      				</router-link>
	      			</div>
	      	</div>
					</scroller>
      </div>
		  </div>

		  <mu-tabs :value="activeTab" lineClass="reset-line-class" @change="handleTabChange" class="header headerTabHeightStatic" >
		  	<mu-tab value="tab1" title="待审" > <i class="icon-tab icon-daishen"></i></mu-tab>
		    <mu-tab value="tab2" title="待阅" >	<i class="icon-tab icon-daiyue"></i></mu-tab>
		    <mu-tab value="tab3" title="最近审批"> <i class="icon-tab icon-zjsp"></i></mu-tab>
		    <mu-tab value="tab4"  title="最近提交" >	<i class="icon-tab icon-zjtj"></i></mu-tab>
			</mu-tabs>


    </div>

  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script>
	import HttpService from "../../service/http.js";

  export default {
    data(){
      return {
      	isTabClick:false,
      	isLoadingData:false,
      	activeTab: 'tab1',
      	pageNo:1,
      	listType:"1",
      	testList1:[],
      	testList2:[],
      	testList3:[],
      	testList4:[]
      }
    },
    computed: {
      demoCon () {
        return this.$store.state.demo.cons1;
      }
    },
    methods: {
      changeCon(){
        this.$store.state.demo.cons1 = 'new Val';
      },
  		handleTabChange (val) {
  			//console.log(index);
	      this.activeTab = val;
	      this.listType=  val.substring(3);//切换tab的时候更换获取列表的类型
	      this.isTabClick=true;
	      //this.loadList(null,true);
	      console.log("当前的类型："+ this.listType);
	    },
	    loadList(done,isRefresh,tabType){
	    	console.log("当前tab的类型："+tabType);

	    	var listType=null;
	    	if(this.isTabClick){
	    		listType=this.listType;
	    		//console.log("进来类型这里了")
	    		this.isTabClick=false;
	    	}else{
	    		//console.log("没有进来类型这里了")
	    		listType=this.listType ==tabType ?this.listType : tabType;
	    	}
	    	//listType=this.listType ==tabType ?this.listType : tabType;
	    	console.log("获取数据的类型："+listType);
	    	if(isRefresh){
	    		this.testList1=[];
	    		this.testList2=[];
	    		this.testList3=[];
	    		this.testList4=[];
	    	}
	    		this['testList' + listType] =this['testList' + listType].concat([
      		{
      			creator:"李四1",
      			createTime:"2017-02-03",
      			title:"申请电脑管理员权限,是内容这是内容这是内容这,内容这是内容是内容这是",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			creator:"李四2",
      			createTime:"2017-02-03",
      			title:"申请电脑管理员权限",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			creator:"李四3",
      			createTime:"2017-02-03",
      			title:"申请电脑管理员权限",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			creator:"李四4",
      			createTime:"2017-02-03",
      			title:"申请电脑管理员权限",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			creator:"李四5",
      			createTime:"2017-02-03",
      			title:"申请电脑管理员权限",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			creator:"李四6",
      			createTime:"2017-02-03",
      			title:"申请电脑管理员权限",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		}
      	]);

	    	console.log(this['testList' + listType]);
		    console.log(listType);
	    	setTimeout(()=> {
          done && done(true);
          this.isLoadingData=false;
          console.log("是否是刷新："+isRefresh)
		      console.log("加载数据完成：" + listType);
        }, 1000);

	    },
      refreshList(done,tabType) {
      	var isRefresh=true;
        this.pageNo = 1;
        this.loadList(done,isRefresh,tabType);
      },
      infiniteList(done,tabType) {
      	var isRefresh=false;
      	//console.log("tab的类型："+tabType);
        this.loadList(done,isRefresh,tabType);
      }
	    ,
	    onRefresh1(done){
	    	this.refreshList(done,1);
	    },
	    onRefresh2(done){
	    	this.refreshList(done,2);
	    },
	    onRefresh3(done){
	    	this.refreshList(done,3);
	    },
	    onRefresh4(done){
	    	this.refreshList(done,4);
	    },
	    onInfinite1(done){
	    	this.infiniteList(done,1)
	    },
	    onInfinite2(done){
	    	this.infiniteList(done,2)
	    },
	    onInfinite3(done){
	    	this.infiniteList(done,3)
	    },
	    onInfinite4(done){
	    	this.infiniteList(done,4)
	    }

    },
  	mounted(){

  	}
  }

</script>

<style scoped>


	/*.header{
		background: red;
	}*/
	/*.header.active{
			display: none;
		}*/
	/*.testVH.active{
		  height: 100vh;
	}*/

</style>
