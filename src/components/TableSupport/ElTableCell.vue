<template>
  <div @click="onCellClick(scope)" style="text-overflow: ellipsis; overflow: hidden;">
    <template v-if="!editing || !property.edittype">
      <span style="margin-left: 5px;">{{ formatCell(property, scope.row[property.attr]) }}</span>
    </template>
    <template v-else>
      <template v-if="property.edittype == 'select'">
        <select v-model="scope.row[property.attr]" placeholder="Select" v-focus @change="onDataChange" @blur="onCellBlur" class="select_cell">
          <option
            v-for="item in property.dataset"
            :key="item.code"
            :label="item.name"
            :value="item.code">
          </option>
        </select>
      </template>
      <template v-else-if="property.edittype == 'date'">
        <el-date-picker v-model="scope.row[property.attr]" type="date" v-click-outside="onClickOutside" format="yyyy-MM-dd" value-format="yyyyMMdd" class="date_cell"/>
      </template>
      <template v-else>
        <input class="edit_cell" :key="scope.$index" v-focus :type="property.edittype ? property.edittype : 'text'" v-model="scope.row[property.attr]" @input="onDataChange" @blur="onCellBlur" @keyup.enter="onCellBlur"/>
      </template>
    </template>
  </div>
</template>

<script>
import moment from 'moment'
import vClickOutside from 'v-click-outside'

export default {
  name: 'ElTableCell',
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      }
    },
    clickOutside: vClickOutside.directive
  },
  props: [
    'scope', 'property'
  ],
  data() {
    return {
      editing: false
    }
  },
  methods: {
    onClickOutside () {
      this.editing = false
    },
    formatCell: function(property, val){
      //get name from common code list
      var result
      if (property.dataset && (result = property.dataset.find(item => item.code == val))) {
        return result.name
      }
      //format value: date, number
      property.formatter = property.formatter ? property.formatter : 'text'
      switch (property.formatter) {
        case 'date':
          return moment(val, 'YYYYMMDD').format('YYYY-MM-DD')
          break;
        case 'number':
          return val ? val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : ""
          break;
        case 'percent':
          return val ? val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + "%" : ""
          break;
        default:
          return val
      }
    },
    onCellBlur: function(row, column, cell, event) {
      setTimeout(() => {        
        this.editing = false
      }, 200)
    },
    onCellClick(data) {
      let allowEdit = this.property.editexpr ? this.property.editexpr(this.scope.row) : true
      if(!allowEdit || !this.property.edittype) {
        return;
      }
      this.editing = true
    },
    onDataChange() {
      this.scope.row["ROWTYPE"] = this.scope.row["ROWTYPE"] != "I" ? "U" : this.scope.row["ROWTYPE"]
      this.$emit("onChange", this.scope.row);
    }
  }
}
</script>

<style scoped>
*:focus {
    outline: none;
}
.edit_cell{
  padding: 2px 4px;
  border: 1px solid #dfe6ec;
  width: 100%;
}
.select_cell{  
  padding: 2px 4px;
  width: 100%;
}
.select_cell:focus {
  outline: none;
}
.date_cell {
  width: 100%;
  height: 23px !important;
}
.date_cell > input {
  height: 23px !important;
}
</style>