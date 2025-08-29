import Image from 'next/image'
import React from 'react'

import avatarUrl from '~images/avatar.jpg'

import styles from './Avatar.module.scss'

const Avatar = () => (
  <Image
    className={styles.root}
    src={avatarUrl}
    alt=""
    width={1000}
    height={1000}
    sizes="9em"
    priority
  />
)

export default Avatar
