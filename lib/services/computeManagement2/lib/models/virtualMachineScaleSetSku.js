/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetSku class.
 * @constructor
 * Describes an available virtual machine scale set sku.
 * @member {string} [resourceType] Gets the type of resource the sku applies
 * to.
 * 
 * @member {object} [sku] Gets the Sku.
 * 
 * @member {string} [sku.name] Gets or sets the sku name.
 * 
 * @member {string} [sku.tier] Gets or sets the sku tier.
 * 
 * @member {number} [sku.capacity] Gets or sets the sku capacity.
 * 
 * @member {object} [capacity] Gets available scaling information.
 * 
 * @member {number} [capacity.minimum] Gets the minimum capacity.
 * 
 * @member {number} [capacity.maximum] Gets the maximum capacity that can be
 * set.
 * 
 * @member {number} [capacity.defaultCapacity] Gets the default capacity.
 * 
 * @member {string} [capacity.scaleType] Gets the scale type applicable to the
 * sku. Possible values for this property include: 'Automatic', 'None'.
 * 
 */
function VirtualMachineScaleSetSku() {
}

/**
 * Defines the metadata of VirtualMachineScaleSetSku
 *
 * @returns {object} metadata of VirtualMachineScaleSetSku
 *
 */
VirtualMachineScaleSetSku.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineScaleSetSku',
    type: {
      name: 'Composite',
      className: 'VirtualMachineScaleSetSku',
      modelProperties: {
        resourceType: {
          required: false,
          serializedName: 'resourceType',
          type: {
            name: 'String'
          }
        },
        sku: {
          required: false,
          serializedName: 'sku',
          type: {
            name: 'Composite',
            className: 'Sku'
          }
        },
        capacity: {
          required: false,
          serializedName: 'capacity',
          type: {
            name: 'Composite',
            className: 'VirtualMachineScaleSetSkuCapacity'
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineScaleSetSku;