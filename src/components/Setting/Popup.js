import React,{useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Modal,Form} from 'antd';

export default function SwitchLabels({setOn}) {
  return (
      <FormControlLabel control={<Switch/>} label="" />
  );
}
