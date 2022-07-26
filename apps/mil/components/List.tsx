import React from 'react'
import SvgAlignJustify from '../src/AlignJustify'
import SvgAlignLeft from '../src/AlignLeft'
import SvgAlignRight from '../src/AlignRight'
import SvgAnchor from '../src/Anchor'
import SvgAperture from '../src/Aperture'
import SvgArchive from '../src/Archive'
import SvgArrowDown from '../src/ArrowDown'
import SvgArrowDownRight from '../src/ArrowDownRight'
import SvgArrowLeft from '../src/ArrowLeft'
import SvgArrowLeftCircle from '../src/ArrowLeftCircle'
import SvgArrowRight from '../src/ArrowRight'
import SvgArrowRightCircle from '../src/ArrowRightCircle'
import SvgArrowUp from '../src/ArrowUp'
import SvgArrowUpCircle from '../src/ArrowUpCircle'
import SvgArrowUpLeft from '../src/ArrowUpLeft'
import SvgArrowUpRight from '../src/ArrowUpRight'
import SvgAtSign from '../src/AtSign'
import SvgAward from '../src/Award'
import SvgBarChart from '../src/BarChart'
import SvgBarChart2 from '../src/BarChart2'
import SvgBattery from '../src/Battery'
import SvgBatteryCharging from '../src/BatteryCharging'
import SvgBell from '../src/Bell'
import SvgBellOff from '../src/BellOff'
import SvgBluetooth from '../src/Bluetooth'
import SvgBold from '../src/Bold'
import SvgBook from '../src/Book'
import SvgBookOpen from '../src/BookOpen'
import SvgBookmark from '../src/Bookmark'
import SvgBox from '../src/Box'
import SvgBriefcase from '../src/Briefcase'
import SvgCalendar from '../src/Calendar'
import SvgCamera from '../src/Camera'
import SvgCameraOff from '../src/CameraOff'
import SvgCast from '../src/Cast'
import SvgCheck from '../src/Check'
import SvgCheckCircle from '../src/CheckCircle'
import SvgCheckSquare from '../src/CheckSquare'
import SvgChevronDown from '../src/ChevronDown'
import SvgChevronLeft from '../src/ChevronLeft'
import SvgChevronRight from '../src/ChevronRight'
import SvgChevronUp from '../src/ChevronUp'
import SvgChevronsDown from '../src/ChevronsDown'
import SvgChevronsLeft from '../src/ChevronsLeft'
import SvgChevronsRight from '../src/ChevronsRight'
import SvgChevronsUp from '../src/ChevronsUp'
import SvgChrome from '../src/Chrome'
import { svgStyleState } from '../containers/svgStyleContainer'

export const returnList = (props) => {
  const { isMenuLoading } = svgStyleState()
  return [
    {
      icon: (
        <SvgAlignJustify
          title="AlignJustify"
          titleId="AlignJustify"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'AlignJustify',
      svg: '../assets/align-justify.svg',
    },
    {
      icon: (
        <SvgAlignLeft
          title="AlignLeft"
          titleId="AlignLeft"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'AlignLeft',
      svg: '../assets/align-left.svg',
    },
    {
      icon: (
        <SvgAlignRight
          title="AlignRight"
          titleId="AlignRight"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'AlignRight',
      svg: '../assets/align-right.svg',
    },
    {
      icon: (
        <SvgAnchor
          title="Anchor"
          titleId="Anchor"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Anchor',
      svg: '../assets/anchor.svg',
    },
    {
      icon: (
        <SvgAperture
          title="Aperture"
          titleId="Aperture"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Aperture',
      svg: '../assets/aperture.svg',
    },
    {
      icon: (
        <SvgArchive
          title="Archive"
          titleId="Archive"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Archive',
      svg: '../assets/archive.svg',
    },
    {
      icon: (
        <SvgArrowDown
          title="ArrowDown"
          titleId="ArrowDown"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ArrowDown',
      svg: '../assets/arrow-down.svg',
    },
    {
      icon: (
        <SvgArrowDownRight
          title="ArrowDownRight"
          titleId="ArrowDownRight"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ArrowDownRight',
      svg: '../assets/arrow-down-right.svg',
    },
    {
      icon: (
        <SvgArrowLeft
          title="ArrowLeft"
          titleId="ArrowLeft"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ArrowLeft',
      svg: '../assets/arrow-left.svg',
    },
    {
      icon: (
        <SvgArrowLeftCircle
          title="ArrowLeftCircle"
          titleId="ArrowLeftCircle"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ArrowLeftCircle',
      svg: '../assets/arrow-left-circle.svg',
    },
    {
      icon: (
        <SvgArrowRight
          title="ArrowRight"
          titleId="ArrowRight"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ArrowRight',
      svg: '../assets/arrow-right.svg',
    },
    {
      icon: (
        <SvgArrowRightCircle
          title="ArrowRightCircle"
          titleId="ArrowRightCircle"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ArrowRightCircle',
      svg: '../assets/arrow-right-circle.svg',
    },
    {
      icon: (
        <SvgArrowUp
          title="ArrowUp"
          titleId="ArrowUp"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ArrowUp',
      svg: '../assets/arrow-up.svg',
    },
    {
      icon: (
        <SvgArrowUpCircle
          title="ArrowUpCircle"
          titleId="ArrowUpCircle"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ArrowUpCircle',
      svg: '../assets/arrow-up-circle.svg',
    },
    {
      icon: (
        <SvgArrowUpLeft
          title="ArrowUpLeft"
          titleId="ArrowUpLeft"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ArrowUpLeft',
      svg: '../assets/arrow-up-left.svg',
    },
    {
      icon: (
        <SvgArrowUpRight
          title="ArrowUpRight"
          titleId="ArrowUpRight"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ArrowUpRight',
      svg: '../assets/arrow-up-right.svg',
    },
    {
      icon: (
        <SvgAtSign
          title="AtSign"
          titleId="AtSign"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'AtSign',
      svg: '../assets/at-sign.svg',
    },
    {
      icon: (
        <SvgAward
          title="Award"
          titleId="Award"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Award',
      svg: '../assets/award.svg',
    },
    {
      icon: (
        <SvgBarChart
          title="BarChart"
          titleId="BarChart"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'BarChart',
      svg: '../assets/bar-chart.svg',
    },
    {
      icon: (
        <SvgBarChart2
          title="BarChart2"
          titleId="BarChart2"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'BarChart2',
      svg: '../assets/bar-chart-2.svg',
    },
    {
      icon: (
        <SvgBattery
          title="Battery"
          titleId="Battery"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Battery',
      svg: '../assets/battery.svg',
    },
    {
      icon: (
        <SvgBatteryCharging
          title="BatteryCharging"
          titleId="BatteryCharging"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'BatteryCharging',
      svg: '../assets/battery-charging.svg',
    },
    {
      icon: (
        <SvgBell
          title="Bell"
          titleId="Bell"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Bell',
      svg: '../assets/bell.svg',
    },
    {
      icon: (
        <SvgBellOff
          title="BellOff"
          titleId="BellOff"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'BellOff',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgBluetooth
          title="Bluetooth"
          titleId="Bluetooth"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Bluetooth',
      svg: '../assets/bluetooth.svg',
    },
    {
      icon: (
        <SvgBold
          title="Bold"
          titleId="Bold"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Bold',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgBook
          title="Book"
          titleId="Book"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Book',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgBookOpen
          title="BookOpen"
          titleId="BookOpen"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'BookOpen',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgBookmark
          title="Bookmark"
          titleId="Bookmark"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Bookmark',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgBox
          title="Box"
          titleId="Box"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Box',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgBriefcase
          title="Briefcase"
          titleId="Briefcase"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Briefcase',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgCalendar
          title="Calendar"
          titleId="Calendar"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Calendar',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgCamera
          title="Camera"
          titleId="Camera"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Camera',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgCameraOff
          title="CameraOff"
          titleId="CameraOff"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'CameraOff',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgCast
          title="Cast"
          titleId="Cast"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Cast',
      svg: '../assets/',
    },

    {
      icon: (
        <SvgCheck
          title="Check"
          titleId="Check"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Check',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgCheckCircle
          title="CheckCircle"
          titleId="CheckCircle"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'CheckCircle',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgCheckSquare
          title="CheckSquare"
          titleId="CheckSquare"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'CheckSquare',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgChevronDown
          title="ChevronDown"
          titleId="ChevronDown"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ChevronDown',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgChevronLeft
          title="ChevronLeft"
          titleId="ChevronLeft"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ChevronLeft',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgChevronRight
          title="ChevronRight"
          titleId="ChevronRight"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ChevronRight',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgChevronUp
          title="ChevronUp"
          titleId="ChevronUp"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ChevronUp',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgChevronsDown
          title="ChevronsDown"
          titleId="ChevronsDown"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ChevronsDown',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgChevronsLeft
          title="ChevronsLeft"
          titleId="ChevronsLeft"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ChevronsLeft',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgChevronsRight
          title="ChevronsRight"
          titleId="ChevronsRight"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ChevronsRight',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgChevronsUp
          title="ChevronsUp"
          titleId="ChevronsUp"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'ChevronsUp',
      svg: '../assets/',
    },
    {
      icon: (
        <SvgChrome
          title="Chrome"
          titleId="Chrome"
          style={{ strokeWidth: props + 'px' }}
        />
      ),
      title: 'Chrome',
      svg: '../assets/',
    },
  ]
}
