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
const List = [
  {
    icon: <SvgAlignJustify title="AlignJustify" titleId="AlignJustify" />,
    title: 'AlignJustify',
    svg: '../assets/align-justify.svg',
  },
  {
    icon: <SvgAlignLeft title="AlignLeft" titleId="AlignLeft" />,
    title: 'AlignLeft',
    svg: '../assets/align-left.svg',
  },
  {
    icon: <SvgAlignRight title="AlignRight" titleId="AlignRight" />,
    title: 'AlignRight',
    svg: '../assets/align-right.svg',
  },
  {
    icon: <SvgAnchor title="Anchor" titleId="Anchor" />,
    title: 'Anchor',
    svg: '../assets/anchor.svg',
  },
  {
    icon: <SvgAperture title="Aperture" titleId="Aperture" />,
    title: 'Aperture',
    svg: '../assets/aperture.svg',
  },
  {
    icon: <SvgArchive title="Archive" titleId="Archive" />,
    title: 'Archive',
    svg: '../assets/archive.svg',
  },
  {
    icon: <SvgArrowDown title="ArrowDown" titleId="ArrowDown" />,
    title: 'ArrowDown',
    svg: '../assets/arrow-down.svg',
  },
  {
    icon: <SvgArrowDownRight title="ArrowDownRight" titleId="ArrowDownRight" />,
    title: 'ArrowDownRight',
    svg: '../assets/arrow-down-right.svg',
  },
  {
    icon: <SvgArrowLeft title="ArrowLeft" titleId="ArrowLeft" />,
    title: 'ArrowLeft',
    svg: '../assets/arrow-left.svg',
  },
  {
    icon: (
      <SvgArrowLeftCircle title="ArrowLeftCircle" titleId="ArrowLeftCircle" />
    ),
    title: 'ArrowLeftCircle',
    svg: '../assets/arrow-left-circle.svg',
  },
  {
    icon: <SvgArrowRight title="ArrowRight" titleId="ArrowRight" />,
    title: 'ArrowRight',
    svg: '../assets/arrow-right.svg',
  },
  {
    icon: (
      <SvgArrowRightCircle
        title="ArrowRightCircle"
        titleId="ArrowRightCircle"
      />
    ),
    title: 'ArrowRightCircle',
    svg: '../assets/arrow-right-circle.svg',
  },
  {
    icon: <SvgArrowUp title="ArrowUp" titleId="ArrowUp" />,
    title: 'ArrowUp',
    svg: '../assets/arrow-up.svg',
  },
  {
    icon: <SvgArrowUpCircle title="ArrowUpCircle" titleId="ArrowUpCircle" />,
    title: 'ArrowUpCircle',
    svg: '../assets/arrow-up-circle.svg',
  },
  {
    icon: <SvgArrowUpLeft title="ArrowUpLeft" titleId="ArrowUpLeft" />,
    title: 'ArrowUpLeft',
    svg: '../assets/arrow-up-left.svg',
  },
  {
    icon: <SvgArrowUpRight title="ArrowUpRight" titleId="ArrowUpRight" />,
    title: 'ArrowUpRight',
    svg: '../assets/arrow-up-right.svg',
  },
  {
    icon: <SvgAtSign title="AtSign" titleId="AtSign" />,
    title: 'AtSign',
    svg: '../assets/at-sign.svg',
  },
  {
    icon: <SvgAward title="Award" titleId="Award" />,
    title: 'Award',
    svg: '../assets/award.svg',
  },
  {
    icon: <SvgBarChart title="BarChart" titleId="BarChart" />,
    title: 'BarChart',
    svg: '../assets/bar-chart.svg',
  },
  {
    icon: <SvgBarChart2 title="BarChart2" titleId="BarChart2" />,
    title: 'BarChart2',
    svg: '../assets/bar-chart-2.svg',
  },
  {
    icon: <SvgBattery title="Battery" titleId="Battery" />,
    title: 'Battery',
    svg: '../assets/battery.svg',
  },
  {
    icon: (
      <SvgBatteryCharging title="BatteryCharging" titleId="BatteryCharging" />
    ),
    title: 'BatteryCharging',
    svg: '../assets/battery-charging.svg',
  },
  {
    icon: <SvgBell title="Bell" titleId="Bell" />,
    title: 'Bell',
    svg: '../assets/bell.svg',
  },
  {
    icon: <SvgBellOff title="BellOff" titleId="BellOff" />,
    title: 'BellOff',
    svg: '../assets/',
  },
  {
    icon: <SvgBluetooth title="Bluetooth" titleId="Bluetooth" />,
    title: 'Bluetooth',
    svg: '../assets/bluetooth.svg',
  },
  {
    icon: <SvgBold title="Bold" titleId="Bold" />,
    title: 'Bold',
    svg: '../assets/',
  },
  {
    icon: <SvgBook title="Book" titleId="Book" />,
    title: 'Book',
    svg: '../assets/',
  },
  {
    icon: <SvgBookOpen title="BookOpen" titleId="BookOpen" />,
    title: 'BookOpen',
    svg: '../assets/',
  },
  {
    icon: <SvgBookmark title="Bookmark" titleId="Bookmark" />,
    title: 'Bookmark',
    svg: '../assets/',
  },
  {
    icon: <SvgBox title="Box" titleId="Box" />,
    title: 'Box',
    svg: '../assets/',
  },
  {
    icon: <SvgBriefcase title="Briefcase" titleId="Briefcase" />,
    title: 'Briefcase',
    svg: '../assets/',
  },
  {
    icon: <SvgCalendar title="Calendar" titleId="Calendar" />,
    title: 'Calendar',
    svg: '../assets/',
  },
  {
    icon: <SvgCamera title="Camera" titleId="Camera" />,
    title: 'Camera',
    svg: '../assets/',
  },
  {
    icon: <SvgCameraOff title="CameraOff" titleId="CameraOff" />,
    title: 'CameraOff',
    svg: '../assets/',
  },
  {
    icon: <SvgCast title="Cast" titleId="Cast" />,
    title: 'Cast',
    svg: '../assets/',
  },

  {
    icon: <SvgCheck title="Check" titleId="Check" />,
    title: 'Check',
    svg: '../assets/',
  },
  {
    icon: <SvgCheckCircle title="CheckCircle" titleId="CheckCircle" />,
    title: 'CheckCircle',
    svg: '../assets/',
  },
  {
    icon: <SvgCheckSquare title="CheckSquare" titleId="CheckSquare" />,
    title: 'CheckSquare',
    svg: '../assets/',
  },
  {
    icon: <SvgChevronDown title="ChevronDown" titleId="ChevronDown" />,
    title: 'ChevronDown',
    svg: '../assets/',
  },
  {
    icon: <SvgChevronLeft title="ChevronLeft" titleId="ChevronLeft" />,
    title: 'ChevronLeft',
    svg: '../assets/',
  },
  {
    icon: <SvgChevronRight title="ChevronRight" titleId="ChevronRight" />,
    title: 'ChevronRight',
    svg: '../assets/',
  },
  {
    icon: <SvgChevronUp title="ChevronUp" titleId="ChevronUp" />,
    title: 'ChevronUp',
    svg: '../assets/',
  },
  {
    icon: <SvgChevronsDown title="ChevronsDown" titleId="ChevronsDown" />,
    title: 'ChevronsDown',
    svg: '../assets/',
  },
  {
    icon: <SvgChevronsLeft title="ChevronsLeft" titleId="ChevronsLeft" />,
    title: 'ChevronsLeft',
    svg: '../assets/',
  },
  {
    icon: <SvgChevronsRight title="ChevronsRight" titleId="ChevronsRight" />,
    title: 'ChevronsRight',
    svg: '../assets/',
  },
  {
    icon: <SvgChevronsUp title="ChevronsUp" titleId="ChevronsUp" />,
    title: 'ChevronsUp',
    svg: '../assets/',
  },
  {
    icon: <SvgChrome title="Chrome" titleId="Chrome" />,
    title: 'Chrome',
    svg: '../assets/',
  },
]
export default List
