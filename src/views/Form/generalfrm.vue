<template>
  <div>
    <el-card class="box-card" style="text-align: left;">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Form Elements</span>
        </div>
        <el-row>
          <el-col :span="8">
            Basic Input
            <el-input round placeholder="Please input" v-model="input1"></el-input>
            Number Input
            <el-input-number v-model="num" :min="1" :max="10"></el-input-number>
          </el-col>
          <el-col :span="8">
            Disabled
            <el-input round placeholder="Please input" disabled></el-input>
            <el-input-number v-model="num" :disabled="true"></el-input-number>
          </el-col>
          <el-col :span="8">
            Password box
            <el-input placeholder="Please input password" v-model="input2" show-password></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            Textarea
            <el-input type="textarea" :rows="4" placeholder="Please input" v-model="textarea"></el-input>
          </el-col>
          <el-col :span="8">
            Input with icon
            <el-input placeholder="Type something" prefix-icon="el-icon-search" v-model="input2"></el-input>
          </el-col>
          <el-col :span="8">
            Mixed input
            <el-input placeholder="Please input" v-model="input1">
              <template slot="prepend">Http://</template>
            </el-input>
            <el-input placeholder="Please input" v-model="input2">
              <template slot="append">.com</template>
            </el-input>
            <el-input placeholder="Please input" v-model="input3" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="Select">
                <el-option label="Restaurant" value="1"></el-option>
                <el-option label="Order No." value="2"></el-option>
                <el-option label="Tel" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
        </el-row>
    </el-card>
    <el-card class="box-card" style="text-align: left;">
      <div slot="header" class="clearfix">
          <span style="font-weight: 900;">Checkbox and Radio</span>
      </div>
      <el-col :span="12">
        <el-radio v-model="radio" label="1">Checked</el-radio>
        <el-radio v-model="radio" label="2">Unchecked</el-radio>
        <el-radio disabled v-model="radio" label="3">Disabled Unchecked</el-radio>
        <el-radio disabled v-model="radio" label="1">Checked Disabled</el-radio>
      </el-col>
      <el-col :span="6">
        <div>Radio Button</div>
        <el-radio-group v-model="radio1">
          <el-radio-button label="New York"></el-radio-button>
          <el-radio-button label="Washington"></el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :span="6">
        <div>Radio With borders</div>
        <el-radio v-model="radio2" label="1" border>Option A</el-radio>
        <el-radio v-model="radio2" label="2" border>Option B</el-radio>
      </el-col>
      <el-col :span="12">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="Option A"></el-checkbox>
          <el-checkbox label="Option B"></el-checkbox>
          <el-checkbox label="Option C"></el-checkbox>
          <el-checkbox label="disabled" disabled></el-checkbox>
          <el-checkbox label="selected and disabled" disabled></el-checkbox>
        </el-checkbox-group>
      </el-col>
      <el-col :span="6">
        <div>Checked Button</div>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </el-col>
      <el-col :span="6">
        <div>Checked With borders</div>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox v-for="city in cities" :label="city" :key="city" border>{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-card>
    <el-card class="box-card" style="text-align: left;">
      <div slot="header" class="clearfix">
          <span style="font-weight: 900;">Toggle Switches</span>
      </div>
      <el-col :span="4">
        <el-switch v-model="value1"> </el-switch>
      </el-col>
      <el-col :span="4">
        <el-switch
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
      <el-col :span="6">
        <el-switch
          v-model="value1"
          active-text="Pay by month"
          inactive-text="Pay by year">
        </el-switch>
      </el-col>
      <el-col :span="6">
        <el-switch
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="Pay by month"
          inactive-text="Pay by year">
        </el-switch>
      </el-col>
      <el-col :span="4">
        <el-switch
          v-model="value1"
          disabled>
        </el-switch>
      </el-col>
    </el-card>
    <el-card class="box-card" style="text-align: left;">
      <div slot="header" class="clearfix">
          <span style="font-weight: 900;">Date/Time Picker</span>
      </div>
      <el-col :span="4">
        <div>Arbitrary time picker</div>
        <el-time-picker
          v-model="timeValue1"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="Arbitrary time">
        </el-time-picker>
      </el-col>
      <el-col :span="18">
        <div>Time range</div>
        <el-time-select
          placeholder="Start time"
          v-model="startTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }">
        </el-time-select>-
        <el-time-select
          placeholder="End time"
          v-model="endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
          }">
        </el-time-select>
      </el-col>
      <el-col :span="4">
        <div>Week</div>
        <el-date-picker
          v-model="weekvalue"
          type="week"
          format="Week WW"
          placeholder="Pick a week">
        </el-date-picker>
        </el-col>
        <el-col :span="4">
        <div>Month</div>
        <el-date-picker
          v-model="monthvalue"
          type="month"
          placeholder="Pick a month">
        </el-date-picker>
        </el-col>
        <el-col :span="4">
        <div>Year</div>
        <el-date-picker
          v-model="yearvalue"
          type="year"
          placeholder="Pick a year">
        </el-date-picker>
        </el-col>
        <el-col :span="4">
        <div>Dates</div>
        <el-date-picker
          type="dates"
          v-model="datesvalue"
          placeholder="Pick one or more dates">
        </el-date-picker>
      </el-col>
      <el-col :span="8">
        <div>Date Range</div>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </el-col>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        num: 1,
        input1: "",
        input2: "",
        input3: '',
        select: '',
        textarea:"",
        radio: '1',
        radio1: 'New York',
        radio2: '1',
        checkList: ['selected and disabled','Option A'],
        checkboxGroup1: ['Shanghai'],
        cities: ['Shanghai', 'Beijing'],
        value1: true,
        value2: false,
        timeValue1: new Date(2016, 9, 10, 18, 40),
        startTime: '',
        endTime: '',
        weekvalue: '',
        monthvalue: '',
        yearvalue: '',
        datesvalue:''
      };
    },
    methods: {
      
    }
  }
</script>
<style lang="scss" scoped>
  .el-card {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    padding-right: 10px;
    padding-bottom: 20px;
    &:last-child {
      padding-right: 0;
    padding-bottom: 0;
    }
    .el-input {      
      padding-bottom: 10px;
    }
  }
</style>