import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public tableHead: any[]; // 表头
  public tableDataSource: any[]; // 表格数据源
  public columnLength: number; // 列数

  constructor() {
  }

  ngOnInit() {
    this.getTableHead();
  }

  getTableHead(): void {
    this.tableHead = ['Status', 'Time', 'Alarm ID', 'Road Name', 'Zone', 'Description', 'Source'];
    this.columnLength = this.tableHead.length;

    this.getTableDataSource();
  }

  getTableDataSource(): void {

    this.tableDataSource = [
      {
        id: 20007,
        version: 56,
        createdDate: '2018-12-18T11:51:12.89Z',
        createdBy: 'IT145USER',
        updatedDate: '2019-01-24T07:33:45.897Z',
        updatedBy: 'user',
        obsolete: 0,
        alarmNo: 'INC_DFE_OCC_ROC',
        alarmExtId: null,
        alarmCat: 'INC',
        alarmSource: 'DFE',
        alarmType: 'OCC',
        alarmCode: 'ROC',
        alarmDesc: '测试编辑',
        eqtNo: null,
        ackTime: '2019-01-24T07:33:45.823Z',
        detTime: '2018-12-18T21:51:12.89Z',
        zoneId: null,
        segmentId: null,
        linkId: null,
        roadName: null,
        roadCat: null,
        startPt: null,
        endPt: null,
        startKm: null,
        endKm: null,
        laneBlockage: null,
        qLen: null,
        duration: null,
        dir: null,
        laneNo: null,
        fileLinkUrl: null,
        curVal: null,
        chngVal: null,
        isGenuine: 0
      },
      {
        id: 20007,
        version: 56,
        createdDate: '2018-12-18T11:51:12.89Z',
        createdBy: 'IT145USER',
        updatedDate: '2019-01-24T07:33:45.897Z',
        updatedBy: 'user',
        obsolete: 0,
        alarmNo: 'INC_DFE_OCC_ROC',
        alarmExtId: null,
        alarmCat: 'INC',
        alarmSource: 'DFE',
        alarmType: 'OCC',
        alarmCode: 'ROC',
        alarmDesc: '测试编辑',
        eqtNo: null,
        ackTime: '2019-01-24T07:33:45.823Z',
        detTime: '2018-12-18T21:51:12.89Z',
        zoneId: null,
        segmentId: null,
        linkId: null,
        roadName: null,
        roadCat: null,
        startPt: null,
        endPt: null,
        startKm: null,
        endKm: null,
        laneBlockage: null,
        qLen: null,
        duration: null,
        dir: null,
        laneNo: null,
        fileLinkUrl: null,
        curVal: null,
        chngVal: null,
        isGenuine: 0
      },
      {
        id: 20007,
        version: 56,
        createdDate: '2018-12-18T11:51:12.89Z',
        createdBy: 'IT145USER',
        updatedDate: '2019-01-24T07:33:45.897Z',
        updatedBy: 'user',
        obsolete: 0,
        alarmNo: 'INC_DFE_OCC_ROC',
        alarmExtId: null,
        alarmCat: 'INC',
        alarmSource: 'DFE',
        alarmType: 'OCC',
        alarmCode: 'ROC',
        alarmDesc: '测试编辑',
        eqtNo: null,
        ackTime: '2019-01-24T07:33:45.823Z',
        detTime: '2018-12-18T21:51:12.89Z',
        zoneId: null,
        segmentId: null,
        linkId: null,
        roadName: null,
        roadCat: null,
        startPt: null,
        endPt: null,
        startKm: null,
        endKm: null,
        laneBlockage: null,
        qLen: null,
        duration: null,
        dir: null,
        laneNo: null,
        fileLinkUrl: null,
        curVal: null,
        chngVal: null,
        isGenuine: 0
      },
      {
        id: 20007,
        version: 56,
        createdDate: '2018-12-18T11:51:12.89Z',
        createdBy: 'IT145USER',
        updatedDate: '2019-01-24T07:33:45.897Z',
        updatedBy: 'user',
        obsolete: 0,
        alarmNo: 'INC_DFE_OCC_ROC',
        alarmExtId: null,
        alarmCat: 'INC',
        alarmSource: 'DFE',
        alarmType: 'OCC',
        alarmCode: 'ROC',
        alarmDesc: '测试编辑',
        eqtNo: null,
        ackTime: '2019-01-24T07:33:45.823Z',
        detTime: '2018-12-18T21:51:12.89Z',
        zoneId: null,
        segmentId: null,
        linkId: null,
        roadName: null,
        roadCat: null,
        startPt: null,
        endPt: null,
        startKm: null,
        endKm: null,
        laneBlockage: null,
        qLen: null,
        duration: null,
        dir: null,
        laneNo: null,
        fileLinkUrl: null,
        curVal: null,
        chngVal: null,
        isGenuine: 0
      },

    ];
  }
  editData(index): void {
    this.tableDataSource[index].edit = !this.tableDataSource[index].edit;
  }
  addData(type): void {
    const data = {
      id: ``,
      version: ``,
      createdDate: ``,
      createdBy: ``,
      updatedDate: ``,
      updatedBy: ``,
      obsolete: ``,
      alarmNo: ``,
      alarmExtId: ``,
      alarmCat: ``,
      alarmSource: ``,
      alarmType: ``,
      alarmCode: ``,
      alarmDesc: `新加的数据`,
      eqtNo: ``,
      ackTime: ``,
      detTime: ``,
      zoneId: ``,
      segmentId: ``,
      linkId: ``,
      roadName: ``,
      roadCat: ``,
      startPt: ``,
      endPt: ``,
      startKm: ``,
      endKm: ``,
      laneBlockage: ``,
      qLen: ``,
      duration: ``,
      dir: ``,
      laneNo: ``,
      fileLinkUrl: ``,
      curVal: ``,
      chngVal: ``,
      isGenuine: ``,
    };
    data['edit'] = true;
    if (type === 'head') {
      this.tableDataSource.unshift(data);
    } else if (type === 'foot') {
      this.tableDataSource.push(data);
    }

  }
}
