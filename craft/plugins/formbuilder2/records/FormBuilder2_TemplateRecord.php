<?php
namespace Craft;

class FormBuilder2_TemplateRecord extends BaseRecord
{
    public function getTableName()
    {
        return 'formbuilder2_templates';
    }

    protected function defineAttributes()
    {
        return array(
            'name'                  => array(AttributeType::Name, 'required' => true),
            'handle'                => array(AttributeType::Handle, 'required' => true),
            'layoutId'              => AttributeType::Number,
            'bodyText'              => AttributeType::Mixed,
            'footerText'            => AttributeType::Mixed,
            'altText'               => AttributeType::Mixed,
            'templateContent'       => AttributeType::Mixed,
            'templateStyles'        => AttributeType::Mixed,
            'templateSettings'      => AttributeType::Mixed
        );
    }

    public function defineIndexes()
    {
      return array(
        array('columns' => array('id'), 'unique' => true),
        array('columns' => array('handle'), 'unique' => true)
      );
    }

    public function scopes()
    {
      return array(
        'ordered' => array('order' => 'id')
      );
    }

    

}
