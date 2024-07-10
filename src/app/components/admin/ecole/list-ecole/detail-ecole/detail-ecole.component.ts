import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../../../core/interfaces/dialog.interface';
import { Ecole } from '../../../../../core/models/ecole.model';
import { EcoleService } from '../../../../../core/services/ecole.service';
import { MaterialModule } from '../../../../../shared/material/material.module';

@Component({
  selector: 'app-detail-ecole',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './detail-ecole.component.html',
  styleUrl: './detail-ecole.component.scss'
})
export class DetailEcoleComponent implements OnInit {

  ecole?: Ecole;
  info: any;

  constructor(
    private ecoleService: EcoleService,
    private ref: MatDialogRef<DetailEcoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){
    this.info = data
  }

  ngOnInit(): void {
    const ecoleId = this.info.code
    this.ecoleService.getAllEcole().subscribe((item: Ecole[]) => {
      this.ecole = item.find(x => x.ecoleId === ecoleId)
      console.log(this.ecole?.nameEcole);
      
    })
    
  }

}
