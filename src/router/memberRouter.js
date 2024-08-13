import MemberCreate from '@/views/member/MemberCreate.vue'
import LoginPage from '@/views/member/LoginPage.vue'
import MyPage from '@/views/member/MyPage.vue'
import MemberReviewList from '@/views/member/MemberReviewList.vue'
import WishList from '@/views/member/WishList.vue'

export const memberRouter = [
    {
        path: '/member/create',
        name: 'MemberCreate',
        component: MemberCreate
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/mypage',
        name: 'MyPage',
        component: MyPage
    },
    {
        path: '/review/myall',
        name: 'MemberReviewList',
        component: MemberReviewList
    },
    {
        path: '/wishList',
        name: 'WishList',
        component: WishList
    }




]