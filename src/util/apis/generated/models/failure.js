/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Failure.
 */
class Failure {
  /**
   * Create a Failure.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of Failure
   *
   * @returns {object} metadata of Failure
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Failure',
      type: {
        name: 'Composite',
        className: 'Failure',
        modelProperties: {
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Failure;
