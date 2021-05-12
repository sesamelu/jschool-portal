import Vue from 'vue'
import Router from 'vue-router'
// 中文页面
const PAGE_HOME_CH =()=> import('./chinese/home.vue')
const PAGE_INDEX_CH =()=> import('./chinese/index.vue')
//举办者
const PAGE_ORGANIZER_CH =()=> import('./chinese/Organizer.vue')
//齐舜界首学校
const PAGE_PROFILE_CH =()=> import('./chinese/Profile.vue')
// 学部介绍
const PAGE_SCHOOLS_CH =()=> import('./chinese/schools.vue')
//创始人的话
const PAGE_ORGANIZERWORD_CH =()=> import('./chinese/organizerWord.vue')
//新闻与活动
const PAGE_NEWS_CH =()=> import('./chinese/news.vue')
// 新闻与活动详情
const PAGE_NEWS_DETAIL_CH =()=> import('./chinese/newsDetail.vue')

//学校资源
const PAGE_RESOURCE_CH =()=> import('./chinese/resource.vue')
//在职教师招聘
const PAGE_HIRETEACHER_CH =()=> import('./chinese/hireTeacher.vue')
//应届生招聘
const PAGE_GRADUATESHIRE_CH =()=> import('./chinese/graduatesHire.vue')
//招生
const PAGE_RECRUITSTUDENTS_CH =()=> import('./chinese/RecruitStudents.vue')
//十年
const PAGE_TENYEARS_CH =()=> import('./chinese/TenYears.vue')

// 英文页面
const PAGE_HOME_EN =()=> import('./en/home.vue')
const PAGE_INDEX_EN =()=> import('./en/index.vue')
//about us
const PAGE_PROFILE_EN =()=> import('./en/enProfile.vue')
// Schools
const PAGE_SCHOOLS_EN =()=> import('./en/enSchools.vue')
// our people
const PAGE_ORGANIZERWORD_EN =()=> import('./en/enOrganizerWord.vue')
//news and events
//新闻与活动
const PAGE_NEWS_EN =()=> import('./en/news.vue')
// 新闻与活动详情
const PAGE_NEWS_DETAIL_EN =()=> import('./en/newsDetail.vue')
// our network
const PAGE_RESOURCE_EN =()=> import('./en/enResource.vue')
//careers
const PAGE_JOBOPENING_EN =()=> import('./en/jobOpening.vue')

//二级
const PAGE_KINDGARTEN_EN =()=> import('./en/enKindgarten.vue')
const PAGE_PRIMARY_EN =()=> import('./en/enPrimary.vue')
const PAGE_HIGH_EN =()=> import('./en/enHigh.vue')


const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: "/jschool-portal",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes: [
        {
            path: '/page',
            name: 'page_home_ch',
            component: PAGE_HOME_CH,
            children:[
                {
                    path: 'index',
                    name: 'page_index_ch',
                    component: PAGE_INDEX_CH,
                },
                //举办者
                {
                    path: 'organizer',
                    name: 'page_organizer_ch',
                    component: PAGE_ORGANIZER_CH,
                },
                //界首齐舜学校
                {
                    path: 'profile',
                    name: 'page_profile_ch',
                    component: PAGE_PROFILE_CH,
                },
                //学部介绍
                {
                    path: 'schools',
                    name: 'page_schools_ch',
                    component: PAGE_SCHOOLS_CH,
                },
                //创始人的话
                {
                    path: 'organizerWord',
                    name: 'page_organizerWord_ch',
                    component: PAGE_ORGANIZERWORD_CH,
                },
                //新闻与活动
                {
                    path: 'news',
                    name: 'page_news_ch',
                    component: PAGE_NEWS_CH,
                },
                //新闻与活动详情
                {
                    path: 'news/detail/:id',
                    name: 'page_news_detail_ch',
                    component: PAGE_NEWS_DETAIL_CH,
                },
                //学校资源
                {
                    path: 'resource',
                    name: 'page_resource_ch',
                    component: PAGE_RESOURCE_CH,
                },
                //在职教师招聘
                {
                    path: 'hireTeacher',
                    name: 'page_hireTeacher_ch',
                    component: PAGE_HIRETEACHER_CH,
                },
                //应届生招聘
                {
                    path: 'graduatesHire',
                    name: 'page_graduatesHire_ch',
                    component: PAGE_GRADUATESHIRE_CH,
                },
                //招生
                {
                    path: 'recruitStudents',
                    name: 'page_recruitStudents_ch',
                    component: PAGE_RECRUITSTUDENTS_CH,
                },
                //十年
                {
                    path: 'tenYears',
                    name: 'page_tenYears_ch',
                    component: PAGE_TENYEARS_CH,
                },
            ]
            
        },
        {
            path: '/page/en',
            name: 'page_home_en',
            component: PAGE_HOME_EN,
            children:[
                {
                    path: 'index',
                    name: 'page_index_en',
                    component: PAGE_INDEX_EN,
                },
                //about us
                {
                    path: 'profile',
                    name: 'page_profile_en',
                    component: PAGE_PROFILE_EN,
                },
                // Schools
                {
                    path: 'schools',
                    name: 'page_schools_en',
                    component: PAGE_SCHOOLS_EN,
                },
                // our people
                {
                    path: 'organizerword',
                    name: 'page_organizerword_en',
                    component: PAGE_ORGANIZERWORD_EN,
                },
                //news and events
                //新闻与活动
                {
                    path: 'news',
                    name: 'page_news_en',
                    component: PAGE_NEWS_EN,
                },
                //新闻与活动详情
                {
                    path: 'news/detail/:id',
                    name: 'page_news_detail_en',
                    component: PAGE_NEWS_DETAIL_EN,
                },
                // our network
                {
                    path: 'resource',
                    name: 'page_resource_en',
                    component: PAGE_RESOURCE_EN,
                },
                //careers
                {
                    path: 'jobworking',
                    name: 'page_jobworking_en',
                    component: PAGE_JOBOPENING_EN,
                },
                //schools二级
                {
                    path: 'kindgarten',
                    name: 'page_kindgarten_en',
                    component: PAGE_KINDGARTEN_EN,
                },
                {
                    path: 'primary',
                    name: 'page_primary_en',
                    component: PAGE_PRIMARY_EN,
                },
                {
                    path: 'high',
                    name: 'page_high_en',
                    component: PAGE_HIGH_EN,
                },
            ],

            
        },

    ]
})