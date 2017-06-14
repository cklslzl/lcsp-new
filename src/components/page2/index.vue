<template>
	<div>
		<div class="page-detail">
			<div class="container hideTab">
				<div class="testVH contentHeightStatic">

					<div class="panel-container">
						<div class="panel-wrapper">

							<div class="panel-head">
								<div class="title">主题</div>
								<div class="title-content">
									{{titledata.company}} {{titledata.title}}
								</div>

								<div class="title">模板名称</div>
								<div class="title-content">
									{{titledata.template}}
								</div>
							</div>
							<i class="icon-approval"></i>
						</div>
					</div>
					<!--
            	作者：offline
            	时间：2017-06-14
            	描述：审批内容
            -->
					<div class="panel-body">
						<div class="sp-header">
							<mu-appbar title="审批内容">
								<mu-icon-button titleClass="sp-content-title2" slot="right" @click="spContentExtendChange" > <i class="icon-up-and-down" v-bind:class="spContentWillShow ? 'icon-up' : 'icon-down'"></i></mu-icon-button>
							</mu-appbar>
						</div>

						<div class="sp-content" v-if="spContentWillShow">
							<div>
								<mu-table :showCheckbox="showCheckbox" ref="table">
									<mu-tbody>
										<mu-tr v-for="item in spContentTable.tableData" :key="item.name">
											<mu-td class='td-title'>{{item.name}}</mu-td>
											<mu-td class='td-content'>{{item.value}}</mu-td>
										</mu-tr>
									</mu-tbody>
								</mu-table>
							</div>
							<div class="sub-title">投标项目基本信息</div>
							<div>
								<mu-table :showCheckbox="showCheckbox" ref="table">
									<mu-tbody>
										<mu-tr v-for="item in proBaseInfo.tableData" :key="item.name">
											<mu-td class='td-title'>{{item.name}}</mu-td>
											<mu-td class='td-content'>{{item.value}}</mu-td>
										</mu-tr>
									</mu-tbody>
								</mu-table>
							</div>
							<div class="sp-link">
								<div class="link-detail">投标价格付款方式
									<router-link to="/page2">查看详情</router-link>
								</div>
							</div>

							<div class="sub-title">信用部分</div>
							<div class="sub-title thrid-title"><span>关键信息</span></div>
							<div>
								<mu-table :showCheckbox="showCheckbox" ref="table">
									<mu-tbody>
										<mu-tr v-for="item in xyPart.tableData" :key="item.name">
											<mu-td class='td-title'>{{item.name}}</mu-td>
											<mu-td class='td-content'>{{item.value}}</mu-td>
										</mu-tr>
									</mu-tbody>
								</mu-table>
							</div>

							<div class="sub-title">信用智能审核意见</div>
							<div class="sub-content">
								<mu-sub-header>财务中心信用管理专员-阎凯：</mu-sub-header>
								<mu-content-block>
									1、招标单位为国有控股企业，成立于2002年，注册资本5500万元，从事县内班车客运、公交客运等，授信额度为681万；
								</mu-content-block>
								<mu-content-block>
									2、付款方式：详见上表《投标价格&付款方式 》，与历史付款方式一致；本次优化点：省补2万/台视同1年分期，客户到期支付；该客户付款记录良好，无逾期；
								</mu-content-block>
							</div>

							<div class="sub-title">指定自带物资部分</div>
							<div class="sub-title thrid-title"><span>红黄线(指定)</span></div>
							<div class="sp-link">
								<div class="link-detail">红黄线(指定)明细表
									<router-link to="/page2">查看详情</router-link>
								</div>
							</div>

							<div class="sub-title">指定自带职能审核意见</div>
							<div class="sub-content">
								<mu-sub-header>投标支持高级经理-盖玉龙：</mu-sub-header>
								<mu-content-block>
									1、标书方面：标书可按期完成。
								</mu-content-block>
								<mu-content-block>
									2、指定物资方面：①相对该客户2016年订单，减少5项指定：离合器、CAN总线、灭火弹、轮胎、玻璃。增加顶风窗、驾驶区大包围、易燃挥发物告警装置等3项指定，不同意新增指定物资，建议引导取消。②苏州驿力ATS相对体系内价差57%且该物料涉及性能验证，需引导取消。③其它同产品线经理意见。
								</mu-content-block>
							</div>
							<div class="sub-title">指定自带职能审核意见</div>
							<div>
								<mu-table :showCheckbox="showCheckbox" ref="table">
									<mu-tbody>
										<mu-tr v-for="item in jcInfo.tableData" :key="item.name">
											<mu-td class='td-title'>{{item.name}}</mu-td>
											<mu-td class='td-content'>{{item.value}}</mu-td>
										</mu-tr>
									</mu-tbody>
								</mu-table>
							</div>
						</div>
					</div>
					<!--
              	作者：offline
              	时间：2017-06-14
              	描述：流程记录
              -->

					<div class="panel-body">
						<div class="sp-header">
							<mu-appbar title="流程记录">
								<mu-icon-button titleClass="sp-content-title2"  slot="right" @click="processRecordChange" ><i class="icon-up-and-down" v-bind:class="processRecordWillShow ? 'icon-up' : 'icon-down'"></i></mu-icon-button>
							</mu-appbar>
						</div>
						<div class="d-padding-top"></div>

						<div class="sp-content" v-if="processRecordWillShow" v-for="item in processData.tableData" :key="item.approvalNode">
							<div class="process-content clearfix" v-if="item.status != '流程结束'" v-vertical-line-height>
								<div class="process-content-left clearfix" >
									<div class="circle"><i class="icon-done"></i></div>
									<div class="vertical-line"></div>
								</div>
								<div class="process-content-right">
									<div class="first-content clearfix">
										<div class="first-content-left">{{item.approvalNode}}</div>
										<div class="first-content-right">
											<div>{{item.status}}</div>
											<div>{{item.approvalTime}}</div>
										</div>
									</div>
									<div class="second-content clearfix">
										<div class="second-content-left">{{item.approvalName}}</div>
										<!--<div class="second-content-right">{{item.approvalTime}}</div>-->
									</div>
									<div class="third-content">
										{{item.content}}
									</div>
								</div>
							</div>
							<div class="process-over" v-if="item.status == '流程结束'">
								<div class="process-content-left">
									<div class="circle"><i class="icon-done"></i></div>
								</div>
								<div class="process-content-right">
									<div class="first-content clearfix">
										<div class="first-content-left">{{item.approvalNode}}</div>
									</div>
								</div>
							</div>
						</div>

					</div>
					<div class="panel-footer">
						<div class="panel-footer-wrapper">
							<div class="sp-link2">
								<div class="link2-detail">返回顶部</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>

</template>
<style lang="scss" src="./index.scss"></style>
<script>
	export default {
		data() {
			return {
				titledata: {
					company: '张家港市港城公共交通有限公司',
					title: '-100ZK6105HG2/ZK6850CHEVPG35等-沪苏经营大区-王军辉-投标审批流程',
					template: '国内销售(A)/确定订单处理(F)/投标审批流程'
				},

				spContentTable: {
					tableData: [{
							name: '需董事长审批项',
							value: '信用'
						},
						{
							name: '需总经理审批项',
							value: '指定自带物资'
						}, {
							name: '需营销总监审批项',
							value: '无'
						}, {
							name: '需董事长审批项',
							value: '否'
						}
					]
				},
				proBaseInfo: {
					tableData: [{
							name: '客户名称',
							value: '张家港公司'
						},
						{
							name: '客户性质',
							value: '国有独资'
						}, {
							name: '经营大区',
							value: '沪苏经营大区'
						}, {
							name: '经销审核意见',
							value: '非经销订单'
						}, {
							name: '交期审核意见',
							value: '交期满足'
						}
					]
				},
				xyPart: {
					tableData: [{
							name: '客户分类风险',
							value: '正常类客户'
						},
						{
							name: '上一年交易额(万元)',
							value: '2896'
						}, {
							name: '目前欠款余额(万元) 含已审批未提车',
							value: '659.64'
						}, {
							name: '本次欠款额(万元)',
							value: '0'
						}, {
							name: '近两年逾期记录',
							value: '无'
						}, {
							name: '合计欠款(万元)',
							value: '6748.26'
						}, {
							name: '是否跟踪',
							value: '否'
						}, {
							name: '授信额度(万元)',
							value: '985'
						}
					]
				},
				jcInfo: {
					tableData: [{
							name: '决策人',
							value: '决策点'
						},
						{
							name: '董事长',
							value: '无'
						}, {
							name: '总经理',
							value: '指定物资红线'
						}, {
							name: '营销总监',
							value: '指定物资黄线'
						}
					]
				},
				orderType: {
					tableData: [{
							name: '风险等级类型',
							value: 'B类'
						},
						{
							name: '个性化需求审批内容及原因',
							value: '精益于公司要求不符'
						}, {
							name: '现有产品不能满足原因',
							value: '-'
						}, {
							name: 'ETO+C',
							value: 'ETO+C'
						}, {
							name: '订单ETO+的原因分类',
							value: 'B类xxx'
						}, {
							name: 'ETO+审批内容',
							value: 'ETO+C'
						}
					]
				},
				processData: {
					tableData: [{
							approvalNode: '投标专员',
							approvalName: '王军辉',
							status: "已完成",
							approvalTime: "06-19 16:30",
							content: "同意"
						},
						{
							approvalNode: '财务中心副主任审核',
							approvalName: '戚高昂',
							status: "已完成",
							approvalTime: "06-19 16:30",
							content: "建议同意投标，国有公交，付款记录良好，本单款项来源全部为财政款项。业务控制好发票合格证，收齐77%款项后交付。效果良好，同意，本人同意，大家都同意。一致认为这个是非常好的项目"
						},
						{
							approvalNode: '董事长审批',
							approvalName: '总经理审核(牛波)',
							status: "通过",
							approvalTime: "06-19 16:30",
							content: "同意"
						},
						{
							approvalNode: '授权联签',
							approvalName: '张峰',
							status: "授权联签",
							approvalTime: "06-19 16:30",
							content: "建议同意投标，国有公交，付款记录良好，建议同意投标，国有公交，付款记录良好，建议同意投标，国有公交，付款记录良好，建议同意投标，国有公交，付款记录良好"
						},
						{
							approvalNode: '客车公章管理盖章',
							approvalName: '客车公章管理_综合秘书(郝佳)',
							status: "已执行",
							approvalTime: "06-19 16:30",
							content: "icon:李艳菊.docx 34.5kb"
						},
						{
							approvalNode: '流程结束',
							approvalName: '',
							status: "流程结束",
							approvalTime: "",
							content: ""
						}
					]
				},
				showCheckbox: false,
				spContentWillShow: false,
//				spContentExtend: 'expand_less',
				processRecordWillShow: false,
//				processRecord: 'expand_less'
			};
		},
		methods: {
			spContentExtendChange() {
				if(this.spContentWillShow == true) {
					this.spContentWillShow = false;
//					this.spContentExtend = 'expand_more';
				} else {
					this.spContentWillShow = true;
//					this.spContentExtend = 'expand_less';
				}
			},
			processRecordChange() {
				if(this.processRecordWillShow == true) {
					this.processRecordWillShow = false;
//					this.processRecord = 'expand_more';
				} else {
					this.processRecordWillShow = true;
//					this.processRecord = 'expand_less';
				}
			}
		},
		mounted(){
			
		}
	}
</script>