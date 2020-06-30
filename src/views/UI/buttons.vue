<template>
  <div>
    <el-row>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Basic usage</span>
        </div>
        <el-row class="button-group">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>

        <el-row class="button-group">
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button>
        </el-row>

        <el-row class="button-group">
            <el-button round>Round</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button>
        </el-row>

        <el-row class="button-group">
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Disabled Button</span>
        </div>
        <el-row class="button-group">
            <el-button disabled>Default</el-button>
            <el-button type="primary" disabled>Primary</el-button>
            <el-button type="success" disabled>Success</el-button>
            <el-button type="info" disabled>Info</el-button>
            <el-button type="warning" disabled>Warning</el-button>
            <el-button type="danger" disabled>Danger</el-button>
        </el-row>

        <el-row class="button-group">
            <el-button plain disabled>Plain</el-button>
            <el-button type="primary" plain disabled>Primary</el-button>
            <el-button type="success" plain disabled>Success</el-button>
            <el-button type="info" plain disabled>Info</el-button>
            <el-button type="warning" plain disabled>Warning</el-button>
            <el-button type="danger" plain disabled>Danger</el-button>
        </el-row>
      </el-card>
    </el-col>
    </el-row>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Text Button</span>
        </div>
        <el-button type="text">Text Button</el-button>
        <el-button type="text" disabled>Text Button</el-button>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Icon Button</span>
        </div>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">Search</el-button>
        <el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
        <el-button type="primary" :loading="true">Loading</el-button>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Button Group</span>
        </div>
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
            <el-button type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
        </el-button-group>
        <el-button-group style="margin-left: 10px;">
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Icon Button</span>
        </div>
        <el-row>
            <el-button>Default</el-button>
            <el-button size="medium">Medium</el-button>
            <el-button size="small">Small</el-button>
            <el-button size="mini">Mini</el-button>
        </el-row>
        <el-row>
            <el-button round>Default</el-button>
            <el-button size="medium" round>Medium</el-button>
            <el-button size="small" round>Small</el-button>
            <el-button size="mini" round>Mini</el-button>
        </el-row>
      </el-card>
    </el-col>
  </div>
</template>

<script>

export default {
  name: 'buttons'
}
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    padding-right: 10px;
    padding-bottom: 10px;
    &:last-child {
      padding-right: 0;
    padding-bottom: 0;
    }
  }
</style>
