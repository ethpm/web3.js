/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file packaging.js
 *
 * @author Adrian Li <adrian@trufflesuite.com>
 * @date 2018
 */

"use strict";

/**
 * Constructs a new instance of Packaging
 *
 * @method Packaging
 * @param {Object} eth
 * @constructor
 */
function Packaging(eth) {
    this.eth = eth;
    this.provider = null;
    this.registryUrl = null;
}

Packaging.prototype.hello = function () {
    return "Hello World";
}

Packaging.prototype.registry = function(registry, options) {
    this.registryUrl = registry;
    this.provider = this.eth.currentProvider;

    if (options && options.provider) {
        this.provider = options.provider
    }

    return this;
}

module.exports = Packaging;
