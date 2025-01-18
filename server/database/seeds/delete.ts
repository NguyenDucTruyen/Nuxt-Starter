import { db } from '../../utils/db'

import { usersTable } from '../schemas/index'

(
  async function () {
    await db.delete(usersTable)
    process.exit(0)
  }
)()
