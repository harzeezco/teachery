'use client';

import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => (
  <section className='mt-10 pb-10'>
    <div className='privacy'>
      <div className='container flex flex-col items-center justify-center py-14 text-white'>
        <h1 className='mb-5 mt-1 text-balance text-center font-nebulica text-4xl font-medium'>
          سياسة الخصوصية لمنصة علم
        </h1>

        <p className='max-w-[750px] text-balance text-center text-xl'>
          مرحبًا بك في منصة علم! نحن ملتزمون بحماية خصوصيتك وأمان
          بياناتك. توضح هذه السياسة كيف نقوم بجمع واستخدام وحماية
          معلوماتك عند استخدام تطبيقنا أو موقعنا الإلكتروني.
        </p>
      </div>
    </div>

    <div className='mx-auto mt-10 max-w-[550px] text-end text-[#475467] max-sm:px-6'>
      <div>
        <h3 className='font-nebulica text-3xl font-medium text-[#101828]'>
          المعلومات التي نقوم بجمعها
        </h3>
        <p className='mt-5 text-2xl font-medium text-[#101828]'>
          أ. المعلومات التي تقدمها لنا مباشرةً
        </p>
        <ul>
          <li className='flex'>
            عند إنشاء حساب، نقوم بجمع معلومات مثل الاسم، البريد
            الإلكتروني، رقم الهاتف، وبيانات الدفع (عند الحاجة){' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
          <li className='flex'>
            عند حجز درس أو تقديم طلب تدريس، قد نطلب منك تفاصيل إضافية
            حول اهتماماتك الأكاديمية أو خبرتك التعليمية{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div>
        <p className='mt-3 font-nebulica text-2xl font-medium text-[#101828]'>
          ب. المعلومات التي نجمعها تلقائيًا
        </p>
        <ul>
          <li className='flex'>
            بيانات الجهاز (نوع الجهاز، نظام التشغيل، معرفات الجهاز
            الفريدة){' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
          <li>
            بيانات الاستخدام (كيفية التفاعل مع التطبيق، الصفحات التي
            تزورها، مدة الاستخدام){' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            معلومات الموقع (إذا سمحت بذلك لتحسين تجربة الحجز
            والتوصيات){' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div>
        <p className='mt-3 font-nebulica text-2xl font-medium text-[#101828]'>
          ج. معلومات من أطراف ثالثة
        </p>
        <ul>
          <li className='mt-2 flex'>
            قد نتلقى معلومات من شركائنا مثل مزودي خدمات الدفع لتأكيد
            المعاملات أو من وسائل التواصل الاجتماعي إذا اخترت التسجيل
            عبرها{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div className='mt-10'>
        <h3 className='mt-3 font-nebulica text-2xl font-medium text-[#101828]'>
          كيف نستخدم معلوماتك؟
        </h3>
        <p className='my-4'>نستخدم بياناتك للأغراض التالية:</p>

        <ul>
          <li>
            تحسين تجربة المستخدم وتقديم خدمات مخصصة{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
          <li>
            إدارة الحسابات وحجوزات الدروس{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            معالجة المدفوعات بأمان{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            رسال الإشعارات والتحديثات المهمة{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            تعزيز الأمان والحماية ضد الاحتيال{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            تحسين خدماتنا بناءً على تحليل الاستخدام{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className='mt-5 font-nebulica text-2xl font-medium text-[#101828]'>
          كيف نحمي بياناتك؟
        </h3>

        <ul className='mt-2'>
          <li>
            نستخدم تقنيات تشفير متقدمة لحماية بياناتك الحساسة{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            إدارة الحسابات وحجوزات الدروس{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            يتم تخزين البيانات على خوادم آمنة تلتزم بأعلى معايير
            الأمان{' '}
            <span className='-translate-y-[20%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className='mb-2 mt-5 font-nebulica text-2xl font-medium text-[#101828]'>
          مشاركة المعلومات مع أطراف ثالثة
        </h3>
        <p className='my-2'>نشارك بياناتك فقط مع:</p>

        <ul>
          <li>
            مزودي خدمات الدفع لإتمام المعاملات{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            مزودي التحليلات لمساعدتنا في تحسين خدماتنا{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            جهات إنفاذ القانون إذا طُلب ذلك بموجب القانون{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className='mb-2 mt-5 font-nebulica text-2xl font-medium text-[#101828]'>
          ملفات تعريف الارتباط (Cookies)
        </h3>
        <p>
          نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح، وتذكر
          تفضيلاتك، وتحليل استخدام الخدمة. يمكنك تعديل إعدادات المتصفح
          للتحكم في ملفات تعريف الارتباط أو تعطيلها
        </p>
      </div>

      <div className='mt-5'>
        <h3 className='mt-5 pb-2 font-nebulica text-2xl font-medium text-[#101828]'>
          حقوقك في الخصوصية
        </h3>
        <p className='my-2'>
          لديك الحقوق التالية فيما يتعلق ببياناتك
        </p>

        <ul>
          <li>
            الوصول إلى بياناتك أو تحديثها أو حذفها{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            إلغاء الاشتراك في رسائل التسويق في أي وقت{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>

          <li>
            طلب نسخة من بياناتك المحفوظة لدينا{' '}
            <span className='-translate-y-[30%] pl-2 text-3xl'>
              .
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className='mt-5 pb-2 font-nebulica text-2xl font-medium text-[#101828]'>
          تحديثات سياسة الخصوصية
        </h3>
        <p className='py-2'>
          قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي
          تغييرات هامة عبر التطبيق أو البريد الإلكتروني.
        </p>
      </div>

      <div>
        <h3 className='mt-5 pb-2 font-nebulica text-2xl font-medium text-[#101828]'>
          تواصل معنا
        </h3>
        <p>
          إذا كان لديك أي استفسارات حول سياسة الخصوصية، يمكنك التواصل
          معنا عبر
        </p>

        <ul className='mt-2 flex flex-col gap-2'>
          <li> البريد الإلكتروني: [أدخل البريد الإلكتروني] 📧</li>

          <li> الهاتف: [أدخل رقم الهاتف] 📞</li>
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
