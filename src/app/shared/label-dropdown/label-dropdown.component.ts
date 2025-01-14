import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DialogService } from '../..//core/services/dialog.service';
import { Label } from '../../core/models/label.model';
import { LabelCategory, LabelService } from '../../core/services/label.service';

export const WHITE_TEXT_CLASS = 'white-text';
export const BLACK_TEXT_CLASS = 'black-text';

const LABEL_DEFINITION_SHORT = {
  VeryLow: 'A flaw that is purely cosmetic and does not affect usage',
  Low: 'A flaw that is unlikely to affect normal operations of the product',
  Medium: 'A flaw that causes occasional inconvenience to some users but they can continue to use the product',
  High: 'A flaw that affects most users and causes major problems for users.i.e., makes the product almost unusable for most users.',
  DocumentationBug: 'A flaw in the documentation e.g., a missing step, a wrong instruction, typos',
  FeatureFlaw:
    'Some functionality missing from a feature delivered in the current version in a way that the feature becomes less useful to the intended target user for normal usage. i.e., the feature is not complete',
  FunctionalityBug: 'A functionality does not work as specified/expected'
};

@Component({
  selector: 'app-label-dropdown',
  templateUrl: './label-dropdown.component.html',
  styleUrls: ['./label-dropdown.component.css']
})
export class LabelDropdownComponent implements OnInit {
  dropdownControl: AbstractControl;
  @Input() attributeName: LabelCategory;
  @Input() initialValue: string;
  @Input() dropdownForm: FormGroup;

  selectedColor: string;
  labelList: Label[];

  constructor(public labelService: LabelService, public dialogService: DialogService) {}

  ngOnInit() {
    this.selectedColor = this.labelService.getColorOfLabel(this.attributeName, this.initialValue);
    this.labelList = this.labelService.getLabelList(this.attributeName);
    this.dropdownControl = this.dropdownForm.get(this.attributeName);
  }

  setSelectedLabelColor(attributeName: LabelCategory, labelValue: string) {
    this.selectedColor = this.labelService.getColorOfLabel(attributeName, labelValue);
  }

  openModalPopup(label: Label): void {
    this.dialogService.openLabelDefinitionDialog(
      label.getFormattedName(),
      this.labelService.getLabelDefinition(label.labelValue, label.labelCategory)
    );
  }

  hasLabelDefinition(label: Label): boolean {
    console.log(label);
    return this.labelService.getLabelDefinition(label.labelValue, label.labelCategory) !== null;
  }

  getLabelDefinition(label: Label): string {
    return LABEL_DEFINITION_SHORT[label.labelValue];
  }

  get dropdownTextColor(): string {
    return this.labelService.isDarkColor(this.selectedColor) ? WHITE_TEXT_CLASS : BLACK_TEXT_CLASS;
  }
}
