<template>
    <div>
        <el-col :span="12">
            <el-card class="box-card" style="text-align: left; ">
                <el-steps :active="active" finish-status="success" style="padding-bottom:20px">
                    <el-step title="Account Info"></el-step>
                    <el-step title="Billing Info"></el-step>
                    <el-step title="Confirmation"></el-step>
                </el-steps>
                <div style="height: 300px">
                    <el-form v-show="active==0" :model="stepForm" :rules="rules" ref="stepForm1" label-width="120px" class="demo-stepForm">
                        <el-form-item label="User name" prop="name">
                            <el-input v-model="stepForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Password" prop="password">
                            <el-input v-model="stepForm.password"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form v-show="active==1" :model="stepForm" :rules="rules" ref="stepForm2" label-width="120px" class="demo-stepForm">
                        <el-form-item label="Card Number" prop="card">
                            <el-input v-model="stepForm.card"></el-input>
                        </el-form-item>
                        <el-form-item label="CVV" prop="ccv">
                            <el-input v-model="stepForm.ccv"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form v-show="active==2" :model="stepForm" :rules="rules" ref="stepForm3" label-width="120px" class="demo-stepForm">
                        <el-table border
                            :data="tableSumData"
                            show-summary
                            style="width: 100%"
                            height="280">
                            <el-table-column prop="id" label="ID"></el-table-column>
                            <el-table-column prop="name" label="Name"> </el-table-column>
                            <el-table-column prop="amount1" sortable label="Amount 1"></el-table-column>
                            <el-table-column prop="amount2" sortable label="Amount 2"></el-table-column>
                            <el-table-column prop="amount3" sortable label="Amount 3"></el-table-column>
                        </el-table>
                    </el-form>
                </div>
                <el-col :span="12">
                    <el-button type="primary" :disabled="active==0" @click="active--">Back</el-button>
                </el-col>
                <el-col :span="12" style="text-align: right;">
                    <el-button type="primary" :disabled="active==2" @click="submitForm()">Next</el-button>
                </el-col>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card class="box-card" style="text-align: left;">
                <el-steps :space="200" :active="active2" simple style="margin-bottom:31px">
                    <el-step title="Step 1" icon="el-icon-edit"></el-step>
                    <el-step title="Step 2" icon="el-icon-upload"></el-step>
                    <el-step title="Step 3" icon="el-icon-picture"></el-step>
                </el-steps>
                <div v-show="active2==0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div v-show="active2==1">
                    <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.</p>
                </div>
                <div v-show="active2>=2">
                    <p>Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.</p>
                </div>
                <el-col :span="12">
                    <el-button type="primary" :disabled="active2==0" @click="active2--">Back</el-button>
                </el-col>
                <el-col :span="12" style="text-align: right;">
                    <el-button type="primary" v-show="active2<2" @click="active2++">Next</el-button>
                    <el-button type="primary" v-show="active2>=2" @click="active2=3">Finish</el-button>
                </el-col>
            </el-card>
        </el-col>
    </div>
</template>
<script>
export default {
    data() {
      return {
        active: 0,
        active2: 0,
        stepForm: {},
        stepForm2: {},
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 5, message: 'Length should be >= 5', trigger: 'blur' }
          ],
          card: [
            { required: true, message: 'Please input Card Number', trigger: 'blur' },
          ],
          ccv: [
            { required: true, message: 'Please input CVV', trigger: 'blur' },
          ]
        },
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
      };
    },
    methods:{
      submitForm() {
        let formName = "stepForm1"
        if(this.active == 1) formName = "stepForm2"
        if(this.active == 2) formName = "stepForm3"
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.active++
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
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