<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="Basic usage" name="1">
      <el-select v-model="value" placeholder="Select">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
      </el-select>
    </el-collapse-item>
    <el-collapse-item title="Disabled option" name="2">
      <el-select v-model="value" placeholder="Select">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled">
        </el-option>
      </el-select>
    </el-collapse-item>
    <el-collapse-item title="Disabled select" name="3">
        <el-select v-model="value" disabled placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </el-collapse-item>
    <el-collapse-item title="Clearable single select" name="4">
        <el-select v-model="value" clearable placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </el-collapse-item>
    <el-collapse-item title="Basic multiple select" name="5">
        <el-select v-model="value1" multiple placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        
        <el-select
            v-model="value2"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </el-collapse-item>
    <el-collapse-item title="Custom template" name="6">
        <el-select v-model="value" placeholder="Select">
            <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
        </el-select>
    </el-collapse-item>
    <el-collapse-item title="Grouping" name="7">
        <el-select v-model="value" placeholder="Select">
            <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label">
            <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-option-group>
        </el-select>
    </el-collapse-item>
    <el-collapse-item title="Option filtering" name="8">
        <el-select v-model="value" filterable placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </el-collapse-item>
    <el-collapse-item title="Remote Search" name="9">
        <el-select
            v-model="remoteValue"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="Please enter a keyword"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
            v-for="item in remoteOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1',
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2',
          disabled: true
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        cities: [{
          value: 'Beijing',
          label: 'Beijing'
        }, {
          value: 'Shanghai',
          label: 'Shanghai'
        }, {
          value: 'Nanjing',
          label: 'Nanjing'
        }, {
          value: 'Chengdu',
          label: 'Chengdu'
        }, {
          value: 'Shenzhen',
          label: 'Shenzhen'
        }, {
          value: 'Guangzhou',
          label: 'Guangzhou'
        }],
        options: [{
          label: 'Popular cities',
          options: [{
            value: 'Shanghai',
            label: 'Shanghai'
          }, {
            value: 'Beijing',
            label: 'Beijing'
          }]
        }, {
          label: 'City name',
          options: [{
            value: 'Chengdu',
            label: 'Chengdu'
          }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
          }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
          }, {
            value: 'Dalian',
            label: 'Dalian'
          }]
        }],
        value: '',
        value1: [],
        value2: [],

        remoteOptions: [],
        remoteValue: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.remoteOptions = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.remoteOptions = [];
        }
      }
    }
  }
</script>