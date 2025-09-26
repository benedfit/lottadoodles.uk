import { Image } from '@newhighsco/chipset'
import React from 'react'

import avatarUrl from '~images/avatar.jpg'

import styles from './Avatar.module.scss'

const Avatar = () => <Image className={styles.root} src={avatarUrl} priority />

export default Avatar
