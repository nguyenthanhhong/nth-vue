<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Table with fixed columns and header</span>
          </div>
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            height="300"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" :label="$t('NO')" width="45" align="center"></el-table-column>
            <el-table-column type="index" fixed align="center" :label="$t('NO')" width="45"></el-table-column>              
            <el-table-column
              fixed
              prop="date"
              label="Date"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="Name"
              width="120">
            </el-table-column>
            <el-table-column
              prop="state"
              label="State"
              width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="City"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="Address"
              width="300">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="Zip"
              width="120">
            </el-table-column>
          </el-table>
          <el-row style="padding-top: 10px; background-color: aliceblue;">
            <el-scrollbar style="height: 100px;" wrap-class="scrollbar-wrapper">{{tableResult}}</el-scrollbar>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Grouping table head</span>
          </div>
          <el-table
            :data="tableGroupData"
            style="width: 100%"
            height="410">
            <el-table-column
            prop="date"
            label="Date"
            width="150">
            </el-table-column>
            <el-table-column label="Delivery Info">
            <el-table-column
                prop="name"
                label="Name"
                width="120">
            </el-table-column>
            <el-table-column label="Address Info">
                <el-table-column
                prop="state"
                label="State"
                width="120">
                </el-table-column>
                <el-table-column
                prop="city"
                label="City"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="Address"
                width="300">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="Zip"
                width="120">
                </el-table-column>
            </el-table-column>
            </el-table-column>
          </el-table>
        </el-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Summary row</span>
          </div>
          <el-table
            :data="tableSumData"
            show-summary
            style="width: 100%"
            height="300">
            <el-table-column
              prop="id"
              label="ID">
            </el-table-column>
            <el-table-column
              prop="name"
              label="Name">
            </el-table-column>
            <el-table-column
              prop="amount1"
              sortable
              label="Amount 1">
            </el-table-column>
            <el-table-column
              prop="amount2"
              sortable
              label="Amount 2">
            </el-table-column>
            <el-table-column
              prop="amount3"
              sortable
              label="Amount 3">
            </el-table-column>
          </el-table>
        </el-card>  
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Expandable row</span>
          </div>
          <el-table
            :data="tableExpandData"
            style="width: 100%"
            height="300">
            <el-table-column type="expand">
              <template slot-scope="props">
                <p>State: {{ props.row.state }}</p>
                <p>City: {{ props.row.city }}</p>
                <p>Address: {{ props.row.address }}</p>
                <p>Zip: {{ props.row.zip }}</p>
              </template>
            </el-table-column>
            <el-table-column
              label="Date"
              prop="date">
            </el-table-column>
            <el-table-column
              label="Name"
              prop="name">
            </el-table-column>
          </el-table>
        </el-card>  
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'basictables',
  data() {
    return {
      tableData: [
        {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-04',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-08',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-06',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-07',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-08',
            name: 'Thomas',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 109, Grove St, Los Angeles',
            zip: 'CA 10036'
        }
      ],
      tableGroupData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }],
      tableSumData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
      tableExpandData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }],
      tableResult: ''
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.tableResult = val;
    }
  }
}
</script>

<style lang="scss" scoped>
  .box-card {
    width: 100%;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
