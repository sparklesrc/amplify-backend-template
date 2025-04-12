export const override = (stack: any) => {
    const userPool = stack.resources.cognitoUserPool;
  
    userPool.schema = [
      ...(userPool.schema ?? []),
      {
        name: 'custom:first_name',
        attributeDataType: 'String',
        mutable: true,
        required: true,
      },
      {
        name: 'custom:last_name',
        attributeDataType: 'String',
        mutable: true,
        required: true,
      },
      {
        name: 'custom:birth_date',
        attributeDataType: 'String',
        mutable: true,
        required: false,
      },
      {
        name: 'custom:phone_number',
        attributeDataType: 'String',
        mutable: true,
        required: false,
      },
      {
        name: 'custom:departamento',
        attributeDataType: 'String',
        mutable: true,
        required: false,
      },
      {
        name: 'custom:ciudad',
        attributeDataType: 'String',
        mutable: true,
        required: false,
      },
      {
        name: 'custom:distrito',
        attributeDataType: 'String',
        mutable: true,
        required: false,
      },
      {
        name: 'custom:address',
        attributeDataType: 'String',
        mutable: true,
        required: false,
      },
    ];
  };