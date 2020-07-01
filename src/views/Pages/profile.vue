<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <el-card style="margin-bottom:20px;">
          <div slot="header" class="clearfix">
            <span>About me</span>
          </div>
          <div class="user-profile">
            <div class="box-center">
              <el-image style="width: 100px; height: 100px" :src="user.avatar" fit="fill"></el-image>
            </div>
            <div class="box-center">
              <div class="user-name text-center">{{ user.name }}</div>
              <div class="user-role text-center text-muted">{{ user.roles }}</div>
            </div>
          </div>

          <div class="user-bio">
            <div class="user-education user-bio-section">
              <div class="user-bio-section-header"><i class="el-icon-school" /><span>Education</span></div>
              <div class="user-bio-section-body">
                <div class="text-muted">
                {{ user.school }}
                </div>
              </div>
            </div>

            <div class="user-skills user-bio-section">
              <div class="user-bio-section-header"><i class="el-icon-star-off" /><span>Soft Skills</span></div>
              <div class="user-bio-section-body">
                <div class="progress-item">
                  <span>Vue</span>
                  <el-progress :percentage="70" />
                </div>
                <div class="progress-item">
                  <span>JavaScript</span>
                  <el-progress :percentage="18" />
                </div>
                <div class="progress-item">
                  <span>Css</span>
                  <el-progress :percentage="12" />
                </div>
                <div class="progress-item">
                  <span>ESLint</span>
                  <el-progress :percentage="100" status="success" />
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="18" :xs="24">
        <el-card>
          <el-tabs v-model="activeTab">
            <el-tab-pane label="Skill" name="activity">
              <div class="user-skill">
                <div class="user-bio-section">
                  <div class="user-bio-section-header"><i class="el-icon-s-tools" /><span>Programming Languages</span></div>
                  <div class="user-bio-section-body">
                    <div class="text-muted">
                      {{ user.school }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-skill">
                <div class="user-bio-section">
                  <div class="user-bio-section-header"><i class="el-icon-magic-stick" /><span>Front-end web technologies</span></div>
                  <div class="user-bio-section-body">
                    <div class="text-muted">
                      {{ user.school }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-skill">
                <div class="user-bio-section">
                  <div class="user-bio-section-header"><i class="el-icon-coin" /><span>Database</span></div>
                  <div class="user-bio-section-body">
                    <div class="text-muted">
                      {{ user.school }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-skill">
                <div class="user-bio-section">
                  <div class="user-bio-section-header"><i class="el-icon-paperclip" /><span>Tool and IDE</span></div>
                  <div class="user-bio-section-body">
                    <div class="text-muted">
                      {{ user.school }}
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Timeline" name="timeline">
                <el-timeline>
                    <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
                        <el-card>
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.content }}</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </el-tab-pane>
            <el-tab-pane label="Basic Details" name="account">
              <div class="link-black text-sm">
                <i class="el-icon-location" />
                Thành Thái, Phường 14 quận 10 TP HCM 
              </div>
              <div class="link-black text-sm">
                <i class="el-icon-phone" />
                +84 38 30 34 006
              </div>
              <div class="link-black text-sm">
                <i class="el-icon-present" />
                1988/06/02
              </div>
              <div class="link-black text-sm">
                <i class="el-icon-message" />
                nguyenthanhhong26@gmail.com
              </div>
              <div class="link-black text-sm">
                Bio
                <p>
                    Built-in customizer enables users to change their admin panel look & feel based on their preferences Beautifully crafted, clean & modern designed admin theme with 3 different demos & light - dark versions.
                </p>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data () {
    return {
      user: {
        name: 'Nguyễn Thanh Hồng',
        email: 'nguyenthanhhong26@gmail.com',
        avatar: 'https://www.pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/app-assets/images/portrait/small/avatar-s-16.jpg',
        roles: 'Admin',
        school: 'Bachelor of computer science in Ho Chi Minh City University of Science'
      },
      activeTab: "activity",
      timeline: [
        {
          timestamp: '2019/4/20',
          title: 'Update Github template',
          content: 'PanJiaChen committed 2019/4/20 20:46'
        },
        {
          timestamp: '2019/4/21',
          title: 'Update Github template',
          content: 'PanJiaChen committed 2019/4/21 20:46'
        },
        {
          timestamp: '2019/4/22',
          title: 'Build Template',
          content: 'PanJiaChen committed 2019/4/22 20:46'
        },
        {
          timestamp: '2019/4/23',
          title: 'Release New Version',
          content: 'PanJiaChen committed 2019/4/23 20:46'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.el-col {
  text-align: left;
}
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
.user-skill {
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
