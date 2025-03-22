import { getSEOTags } from '@/utils/seo';
import Image from 'next/image';
import Link from 'next/link';

import config from '../../../../config';

export const metadata = getSEOTags({
  title: `Terms & Conditions | ${config.appName}`,
  canonicalUrlRelative: '/terms',
  description:
    'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth',
  keywords:
    'UI/UX design, Building MVPs, Design & Research, Innovation Lab-aas',
});

const TermsPage = () => (
  <section className='mt-10 pb-10'>
    <div className='privacy'>
      <div className='container flex flex-col items-center justify-center py-14 text-white'>
        <h1 className='mb-5 mt-1 text-balance text-center font-nebulica text-4xl font-medium'>
          سياسة الخصوصية لمنصة Teachr
        </h1>

        <p className='max-w-[750px] text-balance text-center text-xl'>
          باستخدامك لهذه المنصة، فإنك توافق على الالتزام بهذه الشروط
          والأحكام. إذا كنت لا توافق على أي جزء منها، يُرجى عدم
          استخدام التطبيق أو الموقع الإلكتروني
        </p>
      </div>
    </div>

    <div className='mx-auto mt-10 max-w-[550px] text-end text-[#475467] max-sm:px-6'>
      <div>
        <h3 className='font-nebulica text-3xl font-medium text-[#101828]'>
          سياسة الاستبدال والاسترجاع لتطبيق حجز القاعة
        </h3>
        <p className='mt-5 text-2xl font-medium text-[#101828]'>
          أ. إجراءات الحجز والتأكيد
        </p>
        <ul>
          <li className='flex'>
            يتم تأكيد الحجز عند إتمام عملية الدفع بنجاح، ويحق للتطبيق
            رفض الحجز أو إلغاؤه في حال وجود خلل تقني أو اشتباه بمخالفة
            شروط الاستخدام{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
          <li className='flex'>
            مدة الحجز المعيارية هي 50 دقيقة، على أن يُلتزم بالحضور في
            الوقت المحدد{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div>
        <p className='mt-3 font-nebulica text-2xl font-medium text-[#101828]'>
          ب. الإلغاء قبل موعد الحجز
        </p>
        <ul>
          <li className='flex'>
            يُسمح بالإلغاء واستعادة كامل الرسوم إذا تم الإلغاء قبل
            موعد الحجز بـ 24 ساعة على الأقل{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
          <li>
            إذا تم الإلغاء خلال أقل من 24 ساعة من موعد الحجز، سيتم خصم
            20% من قيمة الحجز كتكاليف إدارية{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div>
        <p className='mt-3 font-nebulica text-2xl font-medium text-[#101828]'>
          ج. التأخير أو عدم الحضور
        </p>
        <ul>
          <li className='mt-2 flex'>
            إذا لم يحضر المستخدم في الموعد المحدد دون إشعار مسبق، يحق
            للتطبيق حجز الرسوم كاملة، ولا يحق له طلب استرجاع{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
          <li className='mt-2 flex'>
            يجوز للمستخدم تعديل وقت الحجز لمرة واحدة على الأقل قبل
            موعد الحجز بـ 12 ساعة دون رسوم إضافية{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div className='mt-10'>
        <h3 className='mt-3 font-nebulica text-2xl font-medium text-[#101828]'>
          استبدال الحجز أو إعادة جدولته
        </h3>

        <ul>
          <li>
            في حال واجه المستخدم ظروفًا طارئة، يمكنه التواصل مع خدمة
            العملاء عبر التطبيق لإعادة جدولة الموعد، شريطة الإشعار قبل
            الموعد بـ 12 ساعة على الأقل{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
          <li>
            في حال وجود خلل في القاعة أو عدم توفرها في الوقت المحدد
            لأسباب خارجة عن إرادة المستخدم، يحق له إما استرجاع الرسوم
            بالكامل أو إعادة جدولة الموعد دون أي رسوم إضافية{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className='mt-5 font-nebulica text-2xl font-medium text-[#101828]'>
          المخالفات السلوكية وشروط الاستخدام
        </h3>

        <ul className='mt-2'>
          <li>
            يُلغى الحجز فورًا في حال صدور تصرفات غير لائقة أو مخالفة
            للقوانين المحلية أو شروط الاستخدام الخاصة بالتطبيق. ولا
            يتم استرجاع أي مبالغ إذا ثبتت المخالفة على المستخدم.{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className='mb-2 mt-5 font-nebulica text-2xl font-medium text-[#101828]'>
          ملاحظات خاصة واستثناءات
        </h3>

        <ul>
          <li>
            أي استثناءات إضافية على هذه السياسة تُعلن صراحة عبر
            التطبيق أو من خلال التنبيهات المرسلة إلى المستخدم{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            تحتفظ الجهة المشغِّلة للتطبيق بحقها في تعديل هذه السياسة
            من وقت لآخر، مع الالتزام بإخطار المستخدمين بالتعديلات
            الجوهرية{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div className='mt-20 flex items-center justify-center'>
      <div className='cta items-center md:grid md:grid-cols-[1fr_1fr]'>
        <div />
        <div className='container pt-10 text-center text-white md:pr-20 lg:text-end'>
          <h1 className='mb-5 text-balance text-3xl font-medium sm:text-4xl lg:mb-10 lg:text-6xl'>
            جاهز للارتقاء برحلتك التعليمية؟
          </h1>

          <p className='text-balance text-xl'>
            حمّل تطبيق علم الآن وانطلق نحو تجربة تعليمية استثنائية.
          </p>

          <div className='mt-10 flex items-center justify-end gap-x-4'>
            <Link href='/'>
              <Image
                alt='logo'
                className='transition-all duration-300 hover:scale-105'
                height={50}
                src='/images/apple.png'
                width={150}
              />
            </Link>

            <Link href='/'>
              <Image
                alt='logo'
                className='transition-all duration-300 hover:scale-105'
                height={50}
                src='/images/google.png'
                width={150}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TermsPage;
