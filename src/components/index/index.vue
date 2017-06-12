<template>
  <div class="page-index">

    <div class="container" id="container-all">
    	
    	 <!--<mu-tabs :value="activeTab" lineClass="reset-line-class" @change="handleTabChange" class="header headerTabHeightStatic" >
		    <mu-tab value="tab1" title="待审"/>
		    <mu-tab value="tab2" title="待阅"/>
		    <mu-tab value="tab3" @active="handleActive" title="最近审批"/>
		    <mu-tab value="tab4"  title="最近提交"/>
		  </mu-tabs>-->
		  
		  
		  <div v-show="activeTab === 'tab1'">
		  	
		    <div class="testVH contentHeightStatic">
		    	
		    	<scroller 
					  :on-refresh="refresh"
					  :on-infinite="infinite">
					  <!-- content goes here -->
					  <div class="panel-container" v-for="testItem in testList">
	      			<div class="panel-wrapper">
	      				<div class="panel-head clearfix">
		      				<div class="panel-head-left">
		      					<!--发起人：李依依-->
		      					{{testItem.name}}
		      				</div>
		      				<div class="panel-head-right">
		      					<!--2016-12-22 19:30-->
		      					{{testItem.time}}
		      				</div>
		      			</div>
		      			<div class="panel-title">
		      				<div class="panel-title-left">
		      					<!--科目三考试：请假一天-->
		      					{{testItem.title}}
		      				</div>
		      			</div>
		      			<div class="panel-content">
		      				<div class="panel-content-top">
		      					<!--请审批詹某某提交的流程：这是长标题这是长标题这是长标题这是长标题这是长标题-->
		      					{{testItem.content}}
		      				</div>
		      				
		      			</div>
	      			</div>
	      		</div>
					  
					</scroller>
		    	
      		
      		
      		
      		
      	</div>
		  </div>
		  <div v-show="activeTab === 'tab2'">
		    <div class="testVH contentHeightStatic">
      	Tab 2
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      </div>
		  </div>
		  <div v-show="activeTab === 'tab3'">
		    <div class="testVH contentHeightStatic">
		    	Tab 3
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      </div>
		  </div>
		  
		  <div v-show="activeTab === 'tab4'">
		    <div class="testVH contentHeightStatic">
      	Tab 4
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      	<p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p><p style="background: white;">测试</p>
      </div>
		  </div>
		  
		  <mu-tabs :value="activeTab" lineClass="reset-line-class" @change="handleTabChange" class="header headerTabHeightStatic" >
		  	<mu-tab value="tab1" title="待审" > <i class="icon-tab icon-daishen"></i> <!--<img class="icon-daishen" src="../../../static/img/icon_not_audited2@2x.png"/>	--></mu-tab>
		    <mu-tab value="tab2" title="待阅" >	<i class="icon-tab icon-daiyue"></i> <!--<img class="icon-daiyue" src="../../../static/img/icon_pending_reading2@2x.png"/>-->	</mu-tab>
		    <mu-tab value="tab3" title="最近审批"> <i class="icon-tab icon-zjsp"></i> <!--<img class="icon-zjsp" src="../../../static/img/icon_recent_approval2@2x.png"/>-->	</mu-tab>
		    <mu-tab value="tab4"  title="最近提交" >	<i class="icon-tab icon-zjtj"></i> <!--<img class="icon-zjtj" src="../../../static/img/icon_recently_submitted2@2x.png"/>--></mu-tab>
		  	
			  <!--<mu-tab value="tab1" title="待审" icon="account_box"/>
		    <mu-tab value="tab2" title="待阅" icon="access_time"/>
		    <mu-tab value="tab3" @active="handleActive" title="最近审批" icon="credit_card    "/>
		    <mu-tab value="tab4"  title="最近提交" icon="send"/>-->
			</mu-tabs>

      
    </div>

  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script>


  export default {
    data(){
      return {
      	onOff:true,
      	activeTab: 'tab1',
      	testList:[
      		{
      			name:"李四1",
      			time:"2017-02-03",
      			title:"这是XXX提交的流程",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			name:"李四2",
      			time:"2017-02-03",
      			title:"这是XXX提交的流程",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			name:"李四3",
      			time:"2017-02-03",
      			title:"这是XXX提交的流程",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			name:"李四4",
      			time:"2017-02-03",
      			title:"这是XXX提交的流程",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			name:"李四5",
      			time:"2017-02-03",
      			title:"这是XXX提交的流程",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			name:"李四6",
      			time:"2017-02-03",
      			title:"这是XXX提交的流程",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		}
      	]
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
      testFn(){
//			console.log(this.$store.state.demo.cons1);
//				document.onclick=function(){
//					if(this.onOff){
//						document.querySelector("#container-all").classList.add("hideTab");
//					
//					}else{
//						
//						document.querySelector("#container-all").classList.remove("hideTab");
//					}
//					this.onOff=!this.onOff;
//				}
  		},
  		handleTabChange (val) {
	      this.activeTab = val
	    },
	    handleActive () {
	      //window.alert('tab active')
	    },
	    refresh(){
	    	
	    },
	    infinite(){
	    	
	    }
    },
  	mounted(){
  		this.testFn();
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