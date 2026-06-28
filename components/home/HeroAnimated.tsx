'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

const PILLARS = [
  {
    key: 'sky',
    title: '天 Sky Intelligence',
    desc: 'CCTV、AI Camera、Tower Camera。空中視角,全時監控整個案場。',
    color: 'from-sky-500 to-sky-400',
    textColor: 'text-sky-600',
    bg: 'bg-sky-50 dark:bg-sky-500/10',
  },
  {
    key: 'human',
    title: '人 Human Safety',
    desc: 'Smart Helmet、Smart Watch、Worker Tag。工人位置、生命跡象、即時警示。',
    color: 'from-human-500 to-human-400',
    textColor: 'text-human-600',
    bg: 'bg-human-400/10 dark:bg-human-500/10',
  },
  {
    key: 'ground',
    title: '地 Ground & Environment',
    desc: 'Gas Detection、Confined Space、Ground Sensor。地下空間、有害氣體即時警報。',
    color: 'from-ground-700 to-ground-500',
    textColor: 'text-ground-700',
    bg: 'bg-ground-700/5 dark:bg-ground-700/10',
  },
  {
    key: 'cloud',
    title: '雲 CMP Platform',
    desc: '所有數據統一匯入。一個 Dashboard 看完整個工地。',
    color: 'from-brand-600 to-cloud-500',
    textColor: 'text-brand-600',
    bg: 'bg-brand-50 dark:bg-brand-500/10',
  },
] as const

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function HeroAnimated() {
  return (
    <>
      <section className="section-spacing">
        <div className="container-page">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block mb-6 px-4 py-1.5 rounded-button bg-brand-50 dark:bg-brand-500/15 text-brand-600 text-sm font-medium"
            >
              天・人・地・雲 工地智能化方案
            </motion.span>

            <motion.h1 variants={fadeUp} className="mb-6 gradient-text">
              Loading Technology
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-ink-500 dark:text-ink-500 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              從空中 CCTV 到地面感測,從工人穿戴到雲端平台 ——
              一個系統,守護整個工地。
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/products" className="btn-primary">
                查看產品方案
              </Link>
              <Link href="/contact" className="btn-secondary">
                預約現場示範
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-ink-50 dark:bg-ink-100">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="mb-4">四大支柱,一個平台</h2>
            <p className="text-ink-500 dark:text-ink-500">
              天・人・地・雲 —— 從空中到地下,從裝置到雲端,無縫整合。
            </p>
          </div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            {PILLARS.map(p => (
              <motion.div
                key={p.key}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`card ${p.bg}`}
              >
                <div className={`inline-block w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} mb-4`} />
                <h3 className={`text-lg font-bold mb-2 ${p.textColor}`}>
                  {p.title}
                </h3>
                <p className="text-sm text-ink-500 dark:text-ink-500 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-card bg-gradient-to-br from-brand-600 to-sky-600 text-white">
            <h2 className="text-white mb-4">準備好升級你的工地?</h2>
            <p className="text-brand-100 mb-8">
              聯絡我們的業務團隊,預約一次免費的現場評估。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-button bg-white text-brand-600 px-6 py-3 font-semibold hover:bg-brand-50 transition-colors"
            >
              預約示範
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}