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
              <img style="width: 100px; height: 120px" src="../../assets/avatar.jpg" fit="fill">
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
              <div class="user-bio-section-header"><i class="el-icon-star-off" /><span>Basic Details</span></div>
              <div class="user-bio-section-body">
                <div class="link-black text-sm">
                  <i class="el-icon-location" />
                  Thanh Thai street, Ward 14, District 10, HCMC
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
                    <div v-for="item of skill_backend" :key="item.title" class="progress-item">
                      <span>{{item.title}}</span>
                      <el-progress :percentage="item.percentage" :color="colors" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-skill">
                <div class="user-bio-section">
                  <div class="user-bio-section-header"><i class="el-icon-magic-stick" /><span>Front-end web technologies</span></div>
                  <div class="user-bio-section-body">
                    <div v-for="item of skill_frontend" :key="item.title" class="progress-item">
                      <span>{{item.title}}</span>
                      <el-progress :percentage="item.percentage" :color="colors"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-skill">
                <div class="user-bio-section">
                  <div class="user-bio-section-header"><i class="el-icon-coin" /><span>Database</span></div>
                  <div class="user-bio-section-body">
                    <div v-for="item of skill_database" :key="item.title" class="progress-item">
                      <span>{{item.title}}</span>
                      <el-progress :percentage="item.percentage" :color="colors"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-skill">
                <div class="user-bio-section">
                  <div class="user-bio-section-header"><i class="el-icon-paperclip" /><span>Tool and IDE</span></div>
                  <div class="user-bio-section-body">
                    <div v-for="item of skill_ide" :key="item.title" class="progress-item">
                      <span>{{item.title}}</span>
                      <el-progress :percentage="item.percentage" status="success"/>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Timeline" name="timeline">
              <el-timeline>
                <el-timeline-item
                  v-for="(item,index) in timeline"
                  :key="index"
                  :timestamp="item.timestamp"
                  :color="item.color">
                  {{item.title}}
                </el-timeline-item>
              </el-timeline>
            </el-tab-pane>
            <el-tab-pane label="Project List" name="projecttimeline">
              <div class="post" v-for="item of projects" :key="item.Name">
                <div class="project-block">
                  <span class="username text-muted">{{item.Name}}</span>
                  <span class="description">{{item.Client}} from {{item.Time}}</span>
                  <span class="description">Responsibilities: {{item.Responsibilities}}</span>
                </div>
                <el-tooltip content="Description" placement="top-start">
                  <p>
                    {{item.Description}}
                  </p>
                </el-tooltip>
                <ul class="list-inline">
                  <li>
                    <el-tooltip content="Languages" placement="top">
                      <span class="link-black text-sm">
                        <i class="el-icon-setting" />
                        {{item.Languages}}
                      </span>
                    </el-tooltip>
                  </li>
                  <li>
                    <el-tooltip content="Front-end Technologies" placement="top">
                      <span class="link-black text-sm">
                        <i class="el-icon-magic-stick" />
                        {{item.Technologies}}
                      </span>
                    </el-tooltip>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Personal Project" name="account">
              <div class="post" v-for="item of myprojects" :key="item.Link">
                <div class="project-block">
                  <a :href="item.Link" target="_blank" class="username text-muted">{{item.Name}}</a>
                  <span class="description" v-if="item.Languages">Back-end Technologies: {{item.Languages}}</span>
                  <span class="description" v-if="item.Technologies">Front-end Technologies: {{item.Technologies}}</span>
                  <span class="description" v-if="item.Framework">Framework: {{item.Framework}}</span>
                </div>
                  <p>Description: 
                    {{item.Description}}
                  </p>
                  <a v-if="item.Review" :href="item.Review" target="_blank" class="link-black text-sm"><i class="el-icon-share" /> Review</a>
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
        avatar: '@/assets/avatar.jpg',
        roles: 'Admin',
        school: 'Bachelor of computer science in Ho Chi Minh City University of Science'
      },
      activeTab: "activity",
      timeline: [
        {
          timestamp: '2020/02/14',
          title: 'GMS Technology',
          color: '#409EFF'
        },
        {
          timestamp: '2018/06/01',
          title: 'CMC Global',
          color: '#0bbd87'
        },
        {
          timestamp: '2017/06/01',
          title: 'System EXE VN Co., Ltd',
          color: '#E6A23C'
        },
        {
          timestamp: '2016/06/01',
          title: 'Dou networks',
          color: '#4050FF'
        },
        {
          timestamp: '2014/06/01',
          title: 'Uniccs Vietnam Co., Ltd',
          color: '#40FFF2'
        },
        {
          timestamp: '2012/12/01',
          title: 'LAC VIET Computing Corp',
          color: '#FF4040'
        }
      ],
      colors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 70},
        {color: '#e6a23c', percentage: 80},
        {color: '#f56c6c', percentage: 90},
        {color: '#6f7ad3', percentage: 100}
      ],
      skill_backend: [
        { title: "Java Core", percentage: 80, detail: "Proficient (Advanced, very good to use it at work)" },
        { title: "JDBC", percentage: 80, detail: "Proficient (Advanced, very good to use it at work)" },
        { title: "Spring, Spring Boot", percentage: 90, detail: "Proficient (Advanced, very good to use it at work)" },
        { title: "Web Service", percentage: 70, detail: "Proficient (Advanced, very good to use it at work)" },
        { title: "Web API", percentage: 70, detail: "Proficient (Advanced, very good to use it at work)" },
        { title: "C#", percentage: 60, detail: "Proficient (Advanced, very good to use it at work)" }
      ],
      skill_frontend: [
        { title: "HTML, CSS", percentage: 70 },
        { title: "JavaScript", percentage: 100 },
        { title: "Bootstrap", percentage: 90 },
        { title: "JQuery", percentage: 85 },
        { title: "VueJs", percentage: 80 }
      ],
      skill_database: [
        { title: "SQL Server", percentage: 75 },
        { title: "Oracle", percentage: 90 },
        { title: "PostgreSQL", percentage: 80 },
        { title: "MySQL", percentage: 70 },
        { title: "MariaDB", percentage: 60 }
      ],
      skill_ide: [
        { title: "Eclipse, IntelliJ", percentage: 100 },
        { title: "Git, SVN", percentage: 100 }
      ],
      skill_soft: [
        { title: "Java Core", percentage: 100 },
        { title: "Java Core", percentage: 100 },
        { title: "Java Core", percentage: 100 },
        { title: "Java Core", percentage: 100 },
        { title: "Java Core", percentage: 100 }
      ],
      projects: [
        {
          Name: "IMONE",
          //Client: "-",
          Time: "7/2019 - 12/2019",
          Description: "Setup project, my commission to develop basic function and common function",
          Responsibilities: "Senior Developer",
          Languages: "Java 8, Spring boot, Mybatis, MySQL",
          Technologies: "HTML, CSS, JavaScript, Bootstrap 3, Jquery 2"
        },
        {
          Name: "cinoX",
          Client: "CJ CGV Viet Nam/Indonesia",
          Time: "06/2018 - 12/2019",
          Description: `
CinoX is a web application for ERP system of CGV Vietnam and CGV Indonesia
I’m in charge of purchasing module (manager raw material item, setup recipe and sale product (food and beverages), purchase request, purchase order, payment)
I’m also in charge of accounting system manager module (this module synchronized with SAP system)
My commission is fix bug, get requirement of end user and develop new functions.
I also support user every end of month to closing stock, check the system to make sure end user do in correct way`,
          Responsibilities: "Senior Developer",
          Languages: "Java 8, Spring MVC, Mybatis, Oracle",
          Technologies: "HTML, CSS, JavaScript" 
        },
        {
          Name: "Sansho",
          Client: "Viet Nam",
          Time: "11/2017 - 05/2018",
          Description: `
A web application for accounting system
- Manager purchase order invoice
- Manager asset, liability, Common Stock, Retained Earnings accounts
- Closing process monthly function: calculate revenue, expense, make
data for closing books`,
          Responsibilities: "Senior Developer",
          Languages: "Java, Spring, Doma, PostgreSQL",
          Technologies: "HTML, CSS, JavaScript, AngularJs"
        },
        {
          Name: "ISEV",
          Client: "Viet Nam",
          Time: "06/2017 - 05/2018",
          Description: "A web application for human resource management system. In module I work, the tasks I usually attend to create requirement analysis document, develop new functions, maintain and fix bugs and test carefully before delivering the final version to the end user.",
          Responsibilities: "Developer",
          Languages: "Java, Spring, Doma, PostgreSQL",
          Technologies: "HTML, CSS, JavaScript, AngularJs"
        },
        {
          Name: "Dounet TMS",
          Client: "Viet Nam",
          Time: "06/2016 - 03/2017",
          Description: "A web application for Software Modeling & Process Innovation system",
          Responsibilities: "Developer",
          Languages: "Java, Spring MVC, PostgreSQL, Oracle",
          Technologies: "HTML, CSS, JavaScript, AngularJs"
        },
        {
          Name: "Nexttaurus",
          Client: "Japan",
          Time: "06/2014 - 05/2016",
          Description: "A system about sales management website for pharmacies. The tasks I usually attend to develop new functions, fix bugs and test before delivering the final version to the end user. Our customers are Japanese so the process must be absolutely accurate, so I learned how to work carefully and I can work in high-pressure environments.",
          Responsibilities: "Developer",
          Languages: "Java, PostgreSQL, Oracle",
          Technologies: "HTML, JavaScript"
        },
        {
          Name: "Sure HCS",
          Client: "Viet Nam",
          Time: "12/2012 - 05/2014",
          Description: "A web application for human resource management system",
          Responsibilities: "Developer",
          Languages: "C#, Asp.net, SQL Server",
          Technologies: "Entity Framework, Sencha touch"
        }
      ],
      myprojects: [
        {
          Name: "NthSpringBoot",
          Link: "https://github.com/nguyenthanhhong/NthSpringBoot",
          Description: "build frame work for ERP project, support basic function",
          Languages: "Java 11, Spring Boot, Gradle, Mybatis, MySQL, PostgreSQL",
          Technologies: "HTML, CSS, JavaScript, Bootstrap 4, Jquery 3"
        },
        {
          Name: "NthVueJs",
          Link: "https://github.com/nguyenthanhhong/nth-vue",
          Description: "production-ready front-end solution for admin interfaces. It is based on vue and uses the UI Toolkit element-ui.",
          Technologies: "HTML, CSS, JavaScript, Bootstrap 4, Jquery 3"
        },
        {
          Name: "Taovetroi",
          Link: "https://play.google.com/store/apps/details?id=com.nthgames.taovetroi",
          Description: "control character to cross obstacles on the road, game play same way with flappy bird",
          Languages: "C#",
          Framework: "Unity",
          Review: "https://www.facebook.com/yeuchibi/videos/1759078520834098/"
        },
        {
          Name: "Chibimaker",
          Link: "https://play.google.com/store/apps/details?id=com.nthgames.chibimaker",
          Description: "girl game style, clothes style of chibi character",
          Languages: "C#",
          Framework: "Unity",
          Review: "https://www.youtube.com/watch?v=IfMuIzizR3w"
        }
      ]
    }
  },
  methods: {
    format(percentage) {
      return percentage < 41 ? 'Aware' : percentage < 71 ? 'Knowledgeable' : 'Proficient';
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
    .description {
      display: block;
      padding: 2px 0;
      font-weight: 500;
      font-size: 12px;
      color: rgb(29, 29, 29);
    }
    
    .el-progress--line {
      width: 450px;
      text-align: left;
      padding-left: 10px;
      .el-progress-bar {
        padding-right: 350px !important;
        margin-right: -355px !important;
      }
    }
  }
}
.post {
    font-size: 14px;
    border-bottom: 1px solid #d2d6de;
    margin-bottom: 10px;
    padding-bottom: 10px;
    color: #666;
    &:last-child {
      border-bottom: 0
    }
}
.project-block {

  .username,
  .description {
    display: block;
    padding: 2px 0;
    font-weight: 500;
    font-size: 12px;
    color: rgb(29, 29, 29);
  }

  .username{
    font-size: 16px;
    font-weight: bold;
    color: #000;
  }

  :after {
    clear: both;
  }

  span {
    font-weight: 500;
    font-size: 14px;
  }
}
.list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;

  li {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
    font-size: 13px;
  }

  .link-black {

    &:hover,
    &:focus {
      color: #999;
    }
  }
}
</style>
