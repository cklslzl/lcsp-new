<template>
<div>
  <!--<h1>Page1</h1>
  <p>
    <mu-raised-button @click="changeCon" primary class="md-raised md-primary">改变值</mu-raised-button>
  </p>
  <div>
    <router-link to="/">
      <mu-raised-button primary class="md-raised md-primary">跳转到index</mu-raised-button>
    </router-link>
  </div>-->
  <scroller 
  :on-refresh="refresh"
  :on-infinite="infinite">
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

</template>
<style lang="scss" src="./index.scss"></style>
<script>
  import "./index.js";
  export default{
  	data(){
  		return{
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
      			name:"李四4",
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
      			name:"李四4",
      			time:"2017-02-03",
      			title:"这是XXX提交的流程",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		},
      		{
      			name:"李四4",
      			time:"2017-02-03",
      			title:"这是XXX提交的流程",
      			content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
      		}
      	]
  		}
  	},
  	methods:{
  		changeCon(){
        this.$store.state.demo.cons1 = 'datachangeByPage1';
      },
  		testFn(){
  			console.log(this.$store.state.demo.cons1);
  		},
	    refresh(){
	    	window.location.reload();
	    },
	    infinite(){
	    	
	    }
  	},
  	mounted(){
  		this.testFn();
  	}
  	
  }
</script>
