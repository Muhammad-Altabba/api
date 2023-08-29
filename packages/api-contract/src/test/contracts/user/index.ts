// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createVersionedExport } from '../util.js';
import * as v0 from './v0/index.js';
import * as v3 from './v3/index.js';
import * as v4 from './v4/index.js';

export default createVersionedExport({ v0, v3, v4 });
