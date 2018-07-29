import React, { Component } from 'react';
import styled from 'styled-components';
import { get, includes } from 'lodash';
import { Upload, Icon, message } from 'antd';
import FormFieldHOC from 'HOC/form-field-hoc';
import FieldTitle from 'Atoms/field-title';
import { RegularText } from 'Atoms/fonts';

const UploadButton = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #F9FAFA;
  border: solid #DEE3E1 1px;
  border-radius: 3px;
  color: rgba(103, 107, 105, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const availableDocTypes = [
  'application/msword',
  'application/pdf'
]

@FormFieldHOC({ type: 'file' })
class UploadDocument extends Component {
  get uploadProps() {
    return {
      action: '',
      name: 'photo',
      multiple: false,
      showUploadList: false,
      beforeUpload: this.beforeUpload,
    };
  };

  beforeUpload = file => new Promise(async (res, rej) => {
    const isValidDocType = includes(availableDocTypes, file.type);

    if (!isValidDocType) {
      message.error('Неверное расширение документа. Доступно только: PDF, DOC');
      return rej('Неверное расширение документа. Доступно только: PDF, DOC');
    }

    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      message.error('Слишком большой документ. Доступно не более 10 мб.');
      return rej('Слишком большое изображение. Доступно не более 10 мб.');
    }

    try {
      this.props.input.onChange(file);
    } catch (e) {
      rej(e);
    }
  })

  render() {
    let { input, fieldTitle, style } = this.props;

    const fileName = get(input, 'value.name');

    return (
      <div style={style}>
        <Upload {...this.uploadProps}>
          { fieldTitle && <FieldTitle>{ fieldTitle }</FieldTitle> }
          <UploadButton>
            <RegularText>
              <Icon type={ fileName ? 'smile-o' : 'upload' } style={{ fontSize: '20px', margin: '0 10px' }} />
              {
                fileName
                  ? `Готово - ${fileName}`
                  : 'Загрузите файл (.doc, .pdf)'
              }
            </RegularText>
          </UploadButton>
        </Upload>
      </div>
    );
  }
}

export default UploadDocument;
