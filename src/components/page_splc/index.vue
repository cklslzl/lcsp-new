<template>
  <div class="page-lcsp">

    <div class="container">
    	<mu-tabs :value="activeTab" lineClass="reset-line-class" @change="handleTabChange" class="header headerTabHeightStatic" >
		  	<mu-tab value="tab1" title="通过" > <i class="icon-tab icon-tongguo"></i></mu-tab>
		    <mu-tab value="tab2" title="驳回" >	<i class="icon-tab icon-bohui"></i></mu-tab>
		    <mu-tab value="tab3" title="转办"> <i class="icon-tab icon-zhuanban"></i></mu-tab>
		    <mu-tab value="tab4"  title="废弃" >	<i class="icon-tab icon-feiqi"></i></mu-tab>
			</mu-tabs>
		  <div v-show="activeTab === 'tab1'">
		    <div class="testVH contentHeightStatic">
		    	<div class="content-container">
		    		<div class="content-container-bg">
		    			<div class="title-font-bold">
			    			即将流向
			    		</div>
			    		<div class="flow-to-user">
			    			<span>NO.4考勤管理员></span><span class="font-blue-1">孙不愧</span>
			    		</div>
			    		<div class="textarea-wrap">
			    			<textarea name="" rows="" cols="" v-model="agreeIdea"></textarea>
			    		</div>
			    		<div class="btn-wrap btn-wrap-scfj">
			    			<mu-row :gutter="true" class="four-col-item-wrap">
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								     <mu-col width="25" tablet="25" desktop="25" class="four-col-item btn-item">
								     	<div><i class="icon-upload"></i></div>
								     	<div>上传附件</div>
								    </mu-col>
								    
								  </mu-row>
			    		</div>
			    		<div class="add-user-wrap">
			    			<div class="title-font-bold title-cs">
				    			抄送
				    		</div>
				    		<div class="small-btn-wrapper">
				    			 <mu-row :gutter="true" class="three-col-item-wrap">
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">刘小三</div><div class="close-right">X</div>
								    </mu-col>
								    <!--<mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">李洪涛</div><div class="close-right">X</div>
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">加了有证</div><div class="close-right">X</div>
								    </mu-col>
								     <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">刘小三</div><div class="close-right">X</div>
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">李洪涛</div><div class="close-right">X</div>
								    </mu-col>-->
								     <mu-col width="33" tablet="33" desktop="33" class="three-col-item btn-item">
								    	添加人员
								    </mu-col>
								    
								  </mu-row>
				    			<!--<mu-row :gutter="true" class="btn-item-wrap">
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item">
								    	添加人员
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item">
								    	收起
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item btn-item-zk">
								    	展开
								    </mu-col>
								    
								  </mu-row>-->
				    			
								  
				    		</div>
				    		
			    		</div>
			    		<div class="title-font-bold title-now-person">
				    			当前处理人
				    	</div>
				    	<div class="now-person">
				    			<span>NO.10直接上级审批></span><span class="font-blue-1">李海义</span>
				    	</div>
		    		</div>
		    		<div class="btn-wrap btn-wrap-tj">
		    			<button class="btn-default-orange">提交</button>
		    		</div>
		    	</div>
		    	
		    
					 
					
      	</div>
		  </div>
		  <div v-show="activeTab === 'tab2'">
		    <div class="testVH contentHeightStatic">
      		<div class="content-container">
		    		<div class="content-container-bg">
		    			<div class="title-font-bold">
			    			驳回到
			    		</div>
			    		<div class="flow-to-user">
			    			<div><span>NO.2起草节点</span></div>
			    			<div class="flow-to-user-tips">驳回节点通过后直接返回本节点	</div>
			    		</div>
			    		<div class="textarea-wrap">
			    			<textarea name="" rows="" cols="" v-model="rejectIdea" placeholder="请输入处理意见"></textarea>
			    		</div>
			    		<div class="btn-wrap btn-wrap-scfj">
			    			<mu-row :gutter="true" class="four-col-item-wrap">
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								     <mu-col width="25" tablet="25" desktop="25" class="four-col-item btn-item">
								     	<div><i class="icon-upload"></i></div>
								     	<div>上传附件</div>
								    </mu-col>
								    
								  </mu-row>
			    		</div>
			    		<div class="add-user-wrap">
			    			<div class="title-font-bold title-cs">
				    			抄送
				    		</div>
				    		<div class="small-btn-wrapper">
				    			 <mu-row :gutter="true" class="three-col-item-wrap">
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">刘小三</div><div class="close-right">X</div>
								    </mu-col>
								    <!--<mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">李洪涛</div><div class="close-right">X</div>
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">加了有证</div><div class="close-right">X</div>
								    </mu-col>
								     <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">刘小三</div><div class="close-right">X</div>
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">李洪涛</div><div class="close-right">X</div>
								    </mu-col>-->
								     <mu-col width="33" tablet="33" desktop="33" class="three-col-item btn-item">
								    	添加人员
								    </mu-col>
								    
								  </mu-row>
				    			<!--<mu-row :gutter="true" class="btn-item-wrap">
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item">
								    	添加人员
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item">
								    	收起
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item btn-item-zk">
								    	展开
								    </mu-col>
								    
								  </mu-row>-->
				    			
								  
				    		</div>
				    		
			    		</div>
			    		<div class="title-font-bold title-now-person">
				    			当前处理人
				    	</div>
				    	<div class="now-person">
				    			<span>NO.10直接上级审批></span><span class="font-blue-1">李海义</span>
				    	</div>
		    		</div>
		    		<div class="btn-wrap btn-wrap-tj">
		    			<button class="btn-default-orange">提交</button>
		    		</div>
		    	</div>
					 
					
      </div>
		  </div>
		  <div v-show="activeTab === 'tab3'">
		    <div class="testVH contentHeightStatic">
		    	<div class="content-container">
		    		<div class="content-container-bg">
		    			<div class="title-font-bold">
			    			转办人员
			    		</div>
			    		<div class="add-user-wrap add-user-wrap-zb">
				    		<div class="small-btn-wrapper">
				    			 <mu-row :gutter="true" class="three-col-item-wrap">
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">刘小三</div><div class="close-right">X</div>
								    </mu-col>
								    <!--<mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">李洪涛</div><div class="close-right">X</div>
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">加了有证</div><div class="close-right">X</div>
								    </mu-col>
								     <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">刘小三</div><div class="close-right">X</div>
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">李洪涛</div><div class="close-right">X</div>
								    </mu-col>-->
								     <mu-col width="33" tablet="33" desktop="33" class="three-col-item btn-item">
								    	添加人员
								    </mu-col>
								    
								  </mu-row>
				    			<!--<mu-row :gutter="true" class="btn-item-wrap">
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item">
								    	添加人员
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item">
								    	收起
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item btn-item-zk">
								    	展开
								    </mu-col>
								    
								  </mu-row>-->
				    			
								  
				    		</div>
				    		
			    		</div>
			    		<div class="textarea-wrap">
			    			<textarea name="" rows="" cols="" v-model="rejectIdea" placeholder="请输入处理意见"></textarea>
			    		</div>
			    		<div class="btn-wrap btn-wrap-scfj">
			    			<mu-row :gutter="true" class="four-col-item-wrap">
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								     <mu-col width="25" tablet="25" desktop="25" class="four-col-item btn-item">
								     	<div><i class="icon-upload"></i></div>
								     	<div>上传附件</div>
								    </mu-col>
								    
								  </mu-row>
			    		</div>
			    		<div class="add-user-wrap">
			    			<div class="title-font-bold title-cs">
				    			抄送
				    		</div>
				    		<div class="small-btn-wrapper">
				    			 <mu-row :gutter="true" class="three-col-item-wrap">
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">刘小三</div><div class="close-right">X</div>
								    </mu-col>
								    <!--<mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">李洪涛</div><div class="close-right">X</div>
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">加了有证</div><div class="close-right">X</div>
								    </mu-col>
								     <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">刘小三</div><div class="close-right">X</div>
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">李洪涛</div><div class="close-right">X</div>
								    </mu-col>-->
								     <mu-col width="33" tablet="33" desktop="33" class="three-col-item btn-item">
								    	添加人员
								    </mu-col>
								    
								  </mu-row>
				    			<!--<mu-row :gutter="true" class="btn-item-wrap">
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item">
								    	添加人员
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item">
								    	收起
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item btn-item-zk">
								    	展开
								    </mu-col>
								    
								  </mu-row>-->
				    			
								  
				    		</div>
				    		
			    		</div>
			    		<div class="title-font-bold title-now-person">
				    			当前处理人
				    	</div>
				    	<div class="now-person">
				    			<span>NO.10直接上级审批></span><span class="font-blue-1">李海义</span>
				    	</div>
		    		</div>
		    		<div class="btn-wrap btn-wrap-tj">
		    			<button class="btn-default-orange">提交</button>
		    		</div>
		    	</div>
					 
					
      </div>
		  </div>
		  
		  <div v-show="activeTab === 'tab4'">
		    <div class="testVH contentHeightStatic">
      		<div class="content-container">
		    		<div class="content-container-bg">
		    			<div class="title-font-bold">
			    			废弃意见
			    		</div>
			    		
			    		<div class="textarea-wrap textarea-wrap-fq">
			    			<textarea name="" rows="" cols="" v-model="rejectIdea" placeholder="请输入处理意见"></textarea>
			    		</div>
			    		<div class="btn-wrap btn-wrap-scfj">
			    			<mu-row :gutter="true" class="four-col-item-wrap">
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								    <mu-col width="25" tablet="25" desktop="25" class="four-col-item img-item">
								    	<img src="../../../static/img/icon_approval@3x.png"/>
								    	
								    </mu-col>
								     <mu-col width="25" tablet="25" desktop="25" class="four-col-item btn-item">
								     	<div><i class="icon-upload"></i></div>
								     	<div>上传附件</div>
								    </mu-col>
								    
								  </mu-row>
			    		</div>
			    		<div class="add-user-wrap">
			    			<div class="title-font-bold title-cs">
				    			抄送
				    		</div>
				    		<div class="small-btn-wrapper">
				    			 <mu-row :gutter="true" class="three-col-item-wrap">
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">刘小三</div><div class="close-right">X</div>
								    </mu-col>
								    <!--<mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">李洪涛</div><div class="close-right">X</div>
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">加了有证</div><div class="close-right">X</div>
								    </mu-col>
								     <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">刘小三</div><div class="close-right">X</div>
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="three-col-item clearfix">
								    	<div class="text-left">李洪涛</div><div class="close-right">X</div>
								    </mu-col>-->
								     <mu-col width="33" tablet="33" desktop="33" class="three-col-item btn-item">
								    	添加人员
								    </mu-col>
								    
								  </mu-row>
				    			<!--<mu-row :gutter="true" class="btn-item-wrap">
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item">
								    	添加人员
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item">
								    	收起
								    </mu-col>
								    <mu-col width="33" tablet="33" desktop="33" class="btn-item btn-item-zk">
								    	展开
								    </mu-col>
								    
								  </mu-row>-->
				    			
								  
				    		</div>
				    		
			    		</div>
			    		<div class="title-font-bold title-now-person">
				    			当前处理人
				    	</div>
				    	<div class="now-person">
				    			<span>NO.10直接上级审批></span><span class="font-blue-1">李海义</span>
				    	</div>
		    		</div>
		    		<div class="btn-wrap btn-wrap-tj">
		    			<button class="btn-default-orange">提交</button>
		    		</div>
		    	</div>
					  
					
      </div>
		  </div>
		  
		  

      
    </div>

  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script>
//	import HttpService from "../../service/index.js";

  export default {
    data(){
      return {
      	activeTab: 'tab1',
      	agreeIdea:"同意",//通过时的意见
      	nameCS:"刘小三",
      	rejectIdea:"",//驳回时的意见
      	
      	
      	
      }
    },
    computed: {
      demoCon () {
        return this.$store.state.demo.cons1;
      }
    },
    methods: {
  		handleTabChange (val) {
	      this.activeTab = val;
	   },
	    handleClose () {
	      window.alert('你点击了删除按钮')
	    }
	    
    },
  	mounted(){
  		
  	}
  }

</script>

<style scoped>
	
	

</style>