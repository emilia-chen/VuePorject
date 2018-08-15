import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Button from '@/components/Button'

import VueIcon from '@/components/VueIcon'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import Radio from '@/components/Radio'
import Checkbox from '@/components/Checkbox'
import Input from '@/components/Input'
import InputNumber from '@/components/InputNumber'

import Select from '@/components/Select'
import Cascader from '@/components/Cascader'
import Switch from '@/components/Switch'
import Slider from '@/components/Slider'


import TimePicker from '@/components/TimePicker'
import DatePicker from '@/components/DatePicker'
import Upload from '@/components/Upload'
import Rate from '@/components/Rate'
import ColorPicker from '@/components/ColorPicker'

import Transfer from '@/components/Transfer'
import Form from '@/components/Form'

import Table from '@/components/Table'
import Tag from '@/components/Tag'
import Progress from '@/components/Progress'
import Tree from '@/components/Tree'
import Pagination from '@/components/Pagination'
import Badge from '@/components/Badge'

import Alert from '@/components/Alert'
import Loading from '@/components/Loading'
import Message from '@/components/Message'
import MessageBox from '@/components/MessageBox'
import Notification from '@/components/Notification'
import NavMenu from '@/components/NavMenu'
import Tabs from '@/components/Tabs'
import Breadcrumb from '@/components/Breadcrumb'
import Dropdown from '@/components/Dropdown'
import Steps from '@/components/Steps'
import Dialog from '@/components/Dialog'
import Tooltip from '@/components/Tooltip'
import Popover from '@/components/Popover'
import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import Collapse from '@/components/Collapse'
import transition from '@/components/transition'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    }
  ,
    {
      path: '/VueIcon',
      name: 'VueIcon',
      component: VueIcon
    }
     ,
    {
      path: '/Container',
      name: 'Container',
      component: Container
    }
   ,
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout
    }
    ,
    {
      path: '/Radio',
      name: 'Radio',
      component: Radio
    }  ,
    {
      path: '/Checkbox',
      name: 'Checkbox',
      component: Checkbox
    }
     ,
    {
      path: '/Input',
      name: 'Input',
      component: Input
    }
    ,
    {
      path: '/InputNumber',
      name: 'InputNumber',
      component: InputNumber
    }
    ,
    {
      path: '/Select',
      name: 'Select',
      component: Select
    }
    ,
    {
      path: '/Cascader',
      name: 'Cascader',
      component: Cascader
    },
    {
      path: '/Switch',
      name: 'Switch',
      component: Switch
    }
    ,
    {
      path: '/Slider',
      name: 'Slider',
      component: Slider
    }
     ,
    {
      path: '/TimePicker',
      name: 'TimePicker',
      component: TimePicker
    }  ,
    {
      path: '/DatePicker',
      name: 'DatePicker',
      component: DatePicker
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/Rate',
      name: 'Rate',
      component: Rate
    }
    ,
    {
      path: '/ColorPicker',
      name: 'ColorPicker',
      component: ColorPicker
    }  ,
    {
      path: '/Transfer',
      name: 'Transfer',
      component: Transfer
    }
    ,
    {
      path: '/Form',
      name: 'Form',
      component: Form
    } ,
    {
      path: '/Table',
      name: 'Table',
      component: Table
    }
    ,
    {
      path: '/Tag',
      name: 'Tag',
      component: Tag
    },
    {
      path: '/Progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/Tree',
      name: 'Tree',
      component: Tree
    },
    {
      path: '/Pagination',
      name: 'Pagination',
      component: Pagination
    }
    ,
    {
      path: '/Badge',
      name: 'Badge',
      component: Badge
    }
    ,
    {
      path: '/Alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/Loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    }
  ,
    {
      path: '/MessageBox',
      name: 'MessageBox',
      component: MessageBox
    }
  ,
    {
      path: '/Notification',
      name: 'Notification',
      component: Notification
    },
    {
      path: '/NavMenu',
      name: 'NavMenu',
      component: NavMenu
    },
    {
      path: '/Tabs',
      name: 'Tabs',
      component: Tabs
    }
  ,
    {
      path: '/Breadcrumb',
      name: 'Breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/Dropdown',
      name: 'Dropdown',
      component: Dropdown
    },
    {
      path: '/Steps',
      name: 'Steps',
      component: Steps
    }
    ,
    {
      path: '/Dialog',
      name: 'Dialog',
      component: Dialog
    }
     ,
    {
      path: '/Tooltip',
      name: 'Tooltip',
      component: Tooltip
    } ,
    {
      path: '/Popover',
      name: 'Popover',
      component: Popover
    } ,
    {
      path: '/Card',
      name: 'Card',
      component: Card
    },
    {
      path: '/Carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/Collapse',
      name: 'Collapse',
      component: Collapse
    },
    {
      path: '/transition',
      name: 'transition',
      component: transition
    }
  ]

})
