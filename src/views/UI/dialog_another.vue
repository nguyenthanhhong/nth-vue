<template>
  <el-dialog :visible.sync="showed" :destroy-on-close="true" width="40%">
      <span slot="title"><img src="@/assets/logopop.png" alt="404"> Popup Dialog from another component</span>
        <el-table
          ref="grd_main"
          :data="tableData"
          highlight-current-row
          border
          height="200px"
          @current-change="fn_currentRowChange"
        >
          <el-table-column fixed type="index" align="center" label="NO" width="45"></el-table-column>
          <el-table-column fixed prop="date" label="Date" width="150"></el-table-column>
          <el-table-column prop="name" label="Name" width="120"></el-table-column>
          <el-table-column prop="state" label="State" width="120"></el-table-column>
          <el-table-column prop="city" label="City" width="120"></el-table-column>
          <el-table-column prop="address" label="Address" width="300"></el-table-column>
          <el-table-column prop="zip" label="Zip" width="120"></el-table-column>
        </el-table>
        <div style="text-align: right; height:30px; padding-top: 10px">
            <el-col class="button-group">
              <el-button class="filter-item" type="primary" icon="el-icon-circle-check" @click="fn_select">{{ $t('CHOICE') }}</el-button>
              <el-button class="filter-item" type="primary" icon="el-icon-close" @click="fn_close">{{ $t('CANCEL') }}</el-button>
            </el-col>
        </div>
      
  </el-dialog>
</template>

<style scoped>
.label {
  white-space: nowrap;
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
.input-item {
  width: calc(100% - 80px);
}
</style>

<script>

export default {
  props: {
    input: {
        type: Object,
        required: false
    },
    result: {
        type: Object,
        required: true
    },
    showed: {
        default: true,
        type: Boolean
    }
  },
  data: function() {
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
            name: 'John',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-04',
            name: 'Morgan',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-01',
            name: 'Jessy',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-08',
            name: 'Henry',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-06',
            name: 'Jackson',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036'
        }, {
            date: '2016-05-07',
            name: 'Ella',
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
    };
  },
  methods: {
    fn_select() {
      this.result = {...this.selectData}
      this.showed= false
    },
    fn_close() {
      this.showed= false
    },
    fn_currentRowChange(currentRow) {
        this.selectData = currentRow
    }
  }
};
</script>