<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: 900;">Table with fixed columns and header</span>
      </div>
      <el-table
        ref="grd_main"
        :data="tableData"
        highlight-current-row
        border
        height="calc(100% - 40px)"
      >
        <el-table-column type="selection" :label="$t('NO')" width="45" align="center"></el-table-column>
        <el-table-column type="index" align="center" label="NO" width="45"></el-table-column>
        <el-table-column
          v-for="column in tableSetting"
          :key="column.attr"
          :property="column.attr"
          :label="$t(column.attr)"
          :show-overflow-tooltip="true"
          :align="column.align? column.align : 'center'"
        >
          <template slot-scope="scope">
            <el-table-cell :scope="scope" :property="column" @onChange="gridMainCellChange"></el-table-cell>
          </template>
        </el-table-column>
      </el-table>
      <el-row style="padding-top: 10px; background-color: aliceblue;">
        
      </el-row>
    </el-card>
  </div>
</template>

<script>
import ElTableCell from '@/components/TableSupport/ElTableCell'

export default {
  name: 'edit',
  components: {
    ElTableCell
  },
  data() {
    return {
      ds_Status: [
        {code: 'Paid', name: 'Paid'},
        {code: 'Shipped', name: 'Shipped'}
      ],
      ds_Country: [
        {code: 'EN', name: 'England'},
        {code: 'CN', name: 'China'},
        {code: 'AU', name: 'Austria'},
        {code: 'FR', name: 'France'}
      ],
      tableSetting : [
        {attr: "Invoice"},
        {attr: "User", edittype:"text"},
        {attr: "Date", edittype:"date", formatter: "date"},
        {attr: "Amount", edittype:"number"},
        {attr: "Status", edittype:"select", dataset: [
        {code: 'Paid', name: 'Paid'},
        {code: 'Shipped', name: 'Shipped'}
      ]},
        {attr: "Country", edittype:"select", dataset: [
        {code: 'EN', name: 'England'},
        {code: 'CN', name: 'China'},
        {code: 'AU', name: 'Austria'},
        {code: 'FR', name: 'France'}
      ]}
      ],
      tableData: [
        {Invoice: 'Order #26589',	User:'Herman Beck'		,Date: '20181016',	Amount:45.00	, Status: 'Paid',		Country:'EN'},
        {Invoice: 'Order #58746',	User:'Mary Adams'		,Date: '20181012',	Amount:245.30	, Status: 'Shipped',	Country:'CN'},
        {Invoice: 'Order #98458',	User:'Caleb Richards'	,Date: '20180518',	Amount:38.00	, Status: 'Shipped',	Country:'AU'},
        {Invoice: 'Order #32658',	User:'June Lane'			,Date: '20180428',	Amount:77.99	, Status: 'Paid',		Country:'FR'},
        {Invoice: 'Order #32659',	User:'June Lane'			,Date: '20180428',	Amount:77.99	, Status: 'Paid',		Country:'FR'}
      ]
    }
  },
  methods:{
    gridMainCellChange(row){
      console.log(row)
    }
  }
}
</script>
