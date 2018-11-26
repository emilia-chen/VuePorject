import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Icon from '@/components/Icon'
import Xicon from '@/components/Xicon'
import XButton from '@/components/XButton'
import Divider from '@/components/Divider'

import Flexbox from '@/components/Flexbox'
import Grids from '@/components/Grids'
import Sticky from '@/components/Sticky'
import Viewbox from '@/components/Viewbox'



import Calender from '@/components/Calender'
import CellBox from '@/components/CellBox'
import CellFormPreview from '@/components/CellFormPreview'
import Cell from '@/components/Cell'
import CheckIcon from '@/components/CheckIcon'
import Checker from '@/components/Checker'
import CheckList from '@/components/CheckList'
import DatetimeView from '@/components/DatetimeView'
import DatetimeRange from '@/components/DatetimeRange'
import Datetime from '@/components/Datetime'
import FormPreview from '@/components/FormPreview'
import Group from '@/components/Group'
import InlineXSwitch from '@/components/InlineXSwitch'
import InlineXNumber from '@/components/InlineXNumber'
import InlineCalendar from '@/components/InlineCalendar'
import PopupPicker from '@/components/PopupPicker'
import PopupRadio from '@/components/PopupRadio'
import Picker from '@/components/Picker'
import Rater from '@/components/Rater'
import Radio from '@/components/Radio'
import Range from '@/components/Range'
import Selector from '@/components/Selector'
import Swipeout from '@/components/Swipeout'
import Search from '@/components/Search'
import XSwitch from '@/components/XSwitch'
import XInput from '@/components/XInput'
import XNumber from '@/components/XNumber'
import XTextarea from '@/components/XTextarea'
import XAddress from '@/components/XAddress'

import Scroller from '@/components/Scroller'

import Pullup from '@/components/Pullup'
import Pulldown from '@/components/Pulldown'
import PulldownPullup from '@/components/PulldownPullup'

import SearchStatic from '@/components/SearchStatic'



import Badge from '@/components/Badge'
import Card from '@/components/Card'
import Clocker from '@/components/Clocker'
import Countup from '@/components/Countup'
import Flow from '@/components/Flow'
import Marquee from '@/components/Marquee'
import Panel from '@/components/Panel'
import Previewer from '@/components/Previewer'
import Qrcode from '@/components/Qrcode'
import Step from '@/components/Step'
import Swiper from '@/components/Swiper'
import XTable from '@/components/XTable'
import XProgress from '@/components/XProgress'
import XImg from '@/components/XImg'



import Actionsheet from '@/components/Actionsheet'
import Alert from '@/components/Alert'
import Confirm from '@/components/Confirm'
import InlineLoading from '@/components/InlineLoading'
import LoadMore from '@/components/LoadMore'
import Loading from '@/components/Loading'
import Msg from '@/components/Msg'
import Popup from '@/components/Popup'
import PopupHeader from '@/components/PopupHeader'
import Popover from '@/components/Popover'
import Spinner from '@/components/Spinner'
import Toast from '@/components/Toast'
import XDialog from '@/components/XDialog'


import ButtonTab from '@/components/ButtonTab'


import Tab from '@/components/Tab'
import Tabbar from '@/components/Tabbar'
import XHeader from '@/components/XHeader'
import Timeline from '@/components/Timeline'
import VChart from '@/components/VChart'
import XCircle from '@/components/XCircle'




import Blur from '@/components/Blur'
import Countdown from '@/components/Countdown'
import ColorPicker from '@/components/ColorPicker'
import Masker from '@/components/Masker'
import WechatEmotion from '@/components/WechatEmotion'
import Drawer from '@/components/Drawer'

import Tools from '@/components/Tools'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/Xicon',
      name: 'Xicon',
      component: Xicon
    }
    ,
     {
      path: '/XButton',
      name: 'XButton',
      component: XButton
    }
    ,
     {
      path: '/Divider',
      name: 'Divider',
      component: Divider
    }  
        ,
     {
      path: '/Flexbox',
      name: 'Flexbox',
      component: Flexbox
    }   
            ,
     {
      path: '/Grids',
      name: 'Grids',
      component: Grids
    }  
            ,
     {
      path: '/Sticky',
      name: 'Sticky',
      component: Sticky
    }  
            ,
     {
      path: '/Viewbox',
      name: 'Viewbox',
      component: Viewbox
    }  ,
     {
      path: '/Calender',
      name: 'Calender',
      component: Calender
    } 
,
     {
      path: '/CellBox',
      name: 'CellBox',
      component: CellBox 
    }
    ,
     {
      path: '/CellFormPreview',
      name: 'CellFormPreview',
      component: CellFormPreview
    }
    ,
     {
      path: '/Cell',
      name: 'Cell',
      component: Cell
    }  
      ,
     {
      path: '/CheckIcon',
      name: 'CheckIcon',
      component: CheckIcon
    }   
      ,
     {
      path: '/Checker',
      name: 'Checker',
      component: Checker
    }  
      ,
     {
      path: '/CheckList',
      name: 'CheckList',
      component: CheckList
    }  
       ,
     {
      path: '/DatetimeView',
      name: 'DatetimeView',
      component: DatetimeView
    }  ,
     {
      path: '/DatetimeRange',
      name: 'DatetimeRange',
      component: DatetimeRange
    } 
      ,
     {
      path: '/Datetime',
      name: 'Datetime',
      component: Datetime
    } 
    ,
     {
      path: '/FormPreview',
      name: 'FormPreview',
      component: FormPreview
    } 
    ,
     {
      path: '/Group',
      name: 'Group',
      component: Group
    } 
    ,
     {
      path: '/InlineXSwitch',
      name: 'InlineXSwitch',
      component: InlineXSwitch
    } 
,
     {
      path: '/InlineXNumber',
      name: 'InlineXNumber',
      component: InlineXNumber
    } 
,
     {
      path: '/InlineCalendar',
      name: 'InlineCalendar',
      component: InlineCalendar
    } 
,
     {
      path: '/PopupPicker',
      name: 'PopupPicker',
      component: PopupPicker 
    } 
,
     {
      path: '/PopupRadio',
      name: 'PopupRadio',
      component: PopupRadio
    } 
,
     {
      path: '/Picker',
      name: 'Picker',
      component: Picker
    } 
,
     {
      path: '/Rater',
      name: 'Rater',
      component: Rater
    } 
,
     {
      path: '/Radio',
      name: 'Radio',
      component: Radio
    } 
,
     {
      path: '/Range',
      name: 'Range',
      component: Range
    } ,
     {
      path: '/Selector',
      name: 'Selector',
      component: Selector
    } ,
     {
      path: '/Swipeout',
      name: 'Swipeout',
      component: Swipeout
    }  ,
     {
      path: '/Search',
      name: 'Search',
      component: Search
    }  ,
     {
      path: '/XSwitch',
      name: 'XSwitch',
      component: XSwitch
    }  ,
     {
      path: '/XInput',
      name: 'XInput',
      component: XInput
    }   ,
     {
      path: '/XNumber',
      name: 'XNumber',
      component: XNumber
    }  ,
     {
      path: '/XTextarea',
      name: 'XTextarea',
      component: XTextarea
    }  ,
     {
      path: '/XAddress',
      name: 'XAddress',
      component: XAddress
    } 
    ,
     {
      path: '/Scroller',
      name: 'Scroller',
      component: Scroller
    } 
    ,
     {
      path: '/component/pulldown',
      name: 'Pulldown',
      component: Pulldown
    } 
    ,
     {
      path: '/component/pullup',
      name: 'Pullup',
      component: Pullup
    } 
    ,
     {
      path: '/component/pulldown-pullup',
      name: 'PulldownPullup',
      component: PulldownPullup
    }    ,
     {
      path: '/component/search-static',
      name: 'SearchStatic',
      component: SearchStatic
    }  

,
     {
      path: '/Badge',
      name: 'Badge',
      component: Badge
    }  
,
     {
      path: '/Card',
      name: 'Card',
      component: Card
    }  
,
     {
      path: '/Clocker',
      name: 'Clocker',
      component: Clocker
    }  
,
     {
      path: '/Countup',
      name: 'Countup',
      component: Countup
    }  
,
     {
      path: '/Flow',
      name: 'Flow',
      component: Flow
    }  

,
     {
      path: '/Marquee',
      name: 'Marquee',
      component: Marquee
    }  
,
     {
      path: '/Panel',
      name: 'Panel',
      component: Panel
    }  
,
     {
      path: '/Previewer',
      name: 'Previewer',
      component: Previewer
    }  
,
     {
      path: '/Qrcode',
      name: 'Qrcode',
      component: Qrcode
    }  
,
     {
      path: '/Step',
      name: 'Step',
      component: Step
    }  
,
     {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    }  ,
     {
      path: '/XTable',
      name: 'XTable',
      component: XTable
    }  ,
     {
      path: '/XProgress',
      name: 'XProgress',
      component: XProgress
    }  
 ,
     {
      path: '/XImg',
      name: 'XImg',
      component: XImg
    }  
 ,
     {
      path: '/Actionsheet',
      name: 'Actionsheet',
      component: Actionsheet
    }  
 ,
     {
      path: '/Alert',
      name: 'Alert',
      component: Alert
    }  
 ,
     {
      path: '/Confirm',
      name: 'Confirm',
      component: Confirm
    }  
 ,
     {
      path: '/InlineLoading',
      name: 'InlineLoading',
      component: InlineLoading
    }  
 ,
     {
      path: '/LoadMore',
      name: 'LoadMore',
      component: LoadMore
    }  
 ,    {
      path: '/Loading',
      name: 'Loading',
      component: Loading
    }  
 ,
     {
      path: '/Msg',
      name: 'Msg',
      component: Msg
    }  
 ,
     {
      path: '/Popup',
      name: 'Popup',
      component: Popup
    }  
 ,
     {
      path: '/PopupHeader',
      name: 'PopupHeader',
      component: PopupHeader
    }   ,
     {
      path: '/Popover',
      name: 'Popover',
      component: Popover
    }  

 ,
     {
      path: '/Spinner',
      name: 'Spinner',
      component: Spinner
    }  
 ,
     {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    }  
 ,
     {
      path: '/XDialog',
      name: 'XDialog',
      component: XDialog
    } ,
    {
      path: '/ButtonTab',
      name: 'ButtonTab',
      component: ButtonTab
    }  ,
    
   
     {
      path: '/Tab',
      name: 'Tab',
      component: Tab
    }  ,
     {
      path: '/Tabbar',
      name: 'Tabbar',
      component: Tabbar
    }  ,
     {
      path: '/XHeader',
      name: 'XHeader',
      component: XHeader
    }
     ,
     {
      path: '/Timeline',
      name: 'Timeline',
      component: Timeline
    }  ,
     {
      path: '/VChart',
      name: 'VChart',
      component: VChart
    }          
  
,
     {
      path: '/XCircle',
      name: 'XCircle',
      component: XCircle
    } ,
     {
      path: '/Blur',
      name: 'Blur',
      component: Blur
    } ,
     {
      path: '/Countdown',
      name: 'Countdown',
      component: Countdown
    } ,
     {
      path: '/ColorPicker',
      name: 'ColorPicker',
      component: ColorPicker
    } ,
     {
      path: '/Masker',
      name: 'Masker',
      component: Masker
    } ,
     {
      path: '/WechatEmotion',
      name: 'WechatEmotion',
      component: WechatEmotion
    } ,
     {
      path: '/Drawer',
      name: 'Drawer',
      component: Drawer
    },
     {
      path: '/Tools',
      name: 'Tools',
      component: Tools
    }
  ]
})
