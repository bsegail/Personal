import styles from './DownloadApp.module.scss'
import Image from "next/legacy/image";
import React from 'react'

const DownloadApp: React.FC = () => {
  return (
    <div className={styles.downloadApp}>
      <div className={styles.container}>
        <a
          className={styles.image}
          href="https://play.google.com/store/apps/details?id=com.woolworths.bigw.shop.android&hl=en_AU&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        >
          <Image alt="Get it on Google Play" src="/images/get-it-on-google-play.png" width={206} height={63} />
        </a>
        <a className={styles.image} href="https://apps.apple.com/au/app/big-w/id1589874371">
          <Image alt="Download on the App Store" src="/images/download-on-the-app-store.svg" width={206} height={69} />
        </a>
      </div>
    </div>
  )
}

export default DownloadApp
